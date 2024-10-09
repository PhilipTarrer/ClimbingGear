"use client";

import React, { useState } from 'react';
import { quizQuestions } from './questions';
import { shoeImageMap } from './lookupTable';
import Head from 'next/head';

export default function ClimbingShoeQuiz() {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [answers, setAnswers] = useState<(string | null)[]>(Array(quizQuestions.length).fill(null));
    const [apiResponse, setApiResponse] = useState<string | null>(null); // State to hold the API response
    const [shoeImage, setShoeImage] = useState<string | null>(null); // State to hold the shoe image URL

    // Handle when the user selects an answer
    const handleAnswerSelect = (answer: string) => {
        const updatedAnswers = [...answers];
        updatedAnswers[currentQuestionIndex] = answer;
        setAnswers(updatedAnswers);
    };

    // Handle going to the next question
    const goToNextQuestion = () => {
        if (currentQuestionIndex < quizQuestions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
        }
    };

    // Handle going back to the previous question
    const goToPreviousQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    // Extract the shoe name and look up the image
    const extractShoeNameAndImage = (response: string) => {
        const shoeNames = response.split('\n').map(name => name.trim()); // Assuming GPT-4 response contains shoe names separated by new lines
        const shoeName = shoeNames[0]; // Get the first recommended shoe for now
        const imageUrl = '/shoeSelection' + shoeImageMap[shoeName] || '/shoeSelection/default.jpg'; // Default image if not found
        console.log(imageUrl);
        setShoeImage(imageUrl);
    };

    // Call the API
    const callAPI = async () => {
        console.log(answers);
        try {
            const response = await fetch('/api', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ answers }),
            });
            const data = await response.json();
            const formattedResponse = data.response.replace(/\n/g, '<br />'); // Replace \n with <br />
            setApiResponse(formattedResponse); // Store the formatted response
            extractShoeNameAndImage(data.response); // Extract and set the shoe image
        } catch (error) {
            console.error('Error calling API:', error);
        }
    };

    return (
        <>
            <Head>
                <title>AI-Powered Climbing Shoe Quiz | Find the Perfect Fit</title>
                <meta name="description" content="Take our AI-powered climbing shoe quiz and get personalized recommendations based on your climbing style, skill level, and foot shape. Find your perfect climbing shoe now!" />
            </Head>
            <div className="items-center justify-center h-screen">
                <div className="bg-cover bg-center w-full h-full flex flex-col items-center justify-center" style={{ backgroundImage: "url('/backgrounds/quizPage.jpeg')" }}>
                    <div className="text-white text-5xl font-bold text-center">Climbing Shoe Quiz</div>
                    <div className='text-white text-3xl font-bold text-center pt-5 pb-20'>Take our AI powered quiz and find the right shoe for you</div>

                    {/* If API response exists, show the response on a card */}
                    {apiResponse ? (
                        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
                            <h2 className="text-2xl font-bold mb-4">Recommended Shoe</h2>
                            {/* Display the formatted response */}
                            <p className="text-lg" dangerouslySetInnerHTML={{ __html: apiResponse! }}></p>
                            {/* Display the shoe image if available */}
                            {shoeImage && <img src={shoeImage} alt="Shoe Image" className="w-64 h-auto mt-4 mx-auto" />}
                        </div>
                    ) : (
                        // Show the quiz if no response yet
                        <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md text-center">
                            <h2 className="text-2xl font-bold mb-4">
                                {quizQuestions[currentQuestionIndex].question}
                            </h2>

                            <div className="flex flex-col space-y-2">
                                {quizQuestions[currentQuestionIndex].options.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => handleAnswerSelect(option)}
                                        className={`p-3 border ${answers[currentQuestionIndex] === option
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-gray-200'
                                            } rounded-lg`}
                                    >
                                        {option}
                                    </button>
                                ))}
                            </div>

                            {/* Navigation Arrows */}
                            <div className="flex justify-between mt-6">
                                <button
                                    onClick={goToPreviousQuestion}
                                    disabled={currentQuestionIndex === 0}
                                    className={`p-2 ${currentQuestionIndex === 0 ? 'opacity-50' : ''}`}
                                >
                                    &#8592; Previous
                                </button>
                                {currentQuestionIndex === quizQuestions.length - 1 ? (
                                    <button
                                        onClick={callAPI}
                                        className="p-2 bg-green-500 text-white rounded-lg"
                                    >
                                        Submit
                                    </button>
                                ) : (
                                    <button
                                        onClick={goToNextQuestion}
                                        className="p-2 bg-blue-500 text-white rounded-lg"
                                    >
                                        Next &#8594;
                                    </button>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}

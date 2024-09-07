"use client";

import React, { useState } from 'react';

// Define types for quiz questions and options
type QuizQuestion = {
    question: string;
    options: string[];
};

// Sample quiz questions
const quizQuestions: QuizQuestion[] = [
    {
        question: 'What type of climbing do you prefer?',
        options: ['Bouldering', 'Sport Climbing', 'Trad Climbing', 'Indoor'],
    },
    {
        question: 'What is your climbing experience level?',
        options: ['Beginner', 'Intermediate', 'Advanced'],
    },
    {
        question: 'How snug do you like your shoes to fit?',
        options: ['Loose', 'Comfortable', 'Snug', 'Tight'],
    },
    {
        question: 'What type of shoe material do you prefer?',
        options: ['Leather', 'Synthetic', 'No Preference'],
    },
    // Add more questions here...
];

export default function ClimbingShoeQuiz() {
    // State for current question index and answers
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
    const [answers, setAnswers] = useState<(string | null)[]>(
        Array(quizQuestions.length).fill(null)
    );

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

    // Submit the answers to the API
    const submitQuiz = async () => {
        try {
            const response = await fetch('/api/submit-quiz', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ answers }),
            });
            const result = await response.json();
            console.log('API Response:', result);
            // Handle the result (e.g., show recommended shoe)
        } catch (error) {
            console.error('Error submitting quiz:', error);
        }
    };

    return (
        
        <div className="flex flex-col items-center justify-center h-screen">
            {/*Background and title*/}
            <div className="bg-cover bg-center w-full h-80 flex items-center justify-center" style={{ backgroundImage: "url('/home/Shoe.jpg')" }}>
                <div className="text-white text-5xl font-bold text-center ">Climbing Shoe Quiz</div>
            </div>

            {/* Flashcard-style question container */}
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
                            onClick={submitQuiz}
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
        </div>
    );
}

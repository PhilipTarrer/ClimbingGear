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
        options: ['Bouldering', 'Sport Climbing', 'Trad Climbing'],
    },
    {
        question: 'What is your climbing experience level?',
        options: ['Beginner', 'Intermediate', 'Advanced'],
    },
    {
        question: 'How wide is your foot?',
        options: ['Thin', 'Average', 'Wide'],
    },
    {
        question: 'What type of shoe material do you prefer?',
        options: ['Leather', 'Synthetic', 'No Preference'],
    },
    {
        question: 'What type of rubber material do you prefer?',
        options: ['Soft', 'Hard', 'No Preference'],
    },
    {
        question: 'Which volume of climbing shoe do you prefer?',
        options: ['High Volume (Male shoe)', 'Low Volume (Female shoe', 'No Preference'],
    },
    {
        question: 'What type of shoe aggressiveness do you prefer?',
        options: ['Aggressive', 'Moderate', 'Neutral'],
    },
    {
        question: 'What type of closure system do you prefer?',
        options: ['Laces', 'Velcro', 'Slip-on'],
    },
    {
        question: 'Where do you prefer climbing?',
        options: ['Inside', 'Outside', 'Both'],
    },
    {
        question: 'Do you prefer more sensitivity or support in your shoe?',
        options: ['Sensitivity (Feel the rock)', 'Support (More structure)', 'No Preference'],
    },
    {
        question: 'What type of toe shape do you prefer?',
        options: ['Pointed', 'Rounded', 'No Preference'],
    },
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

        <div className="items-center justify-center h-screen">

            {/*Background and title*/}
            <div className="bg-cover bg-center w-full h-full flex flex-col items-center justify-center" style={{ backgroundImage: "url('/backgrounds/quizPage.jpeg')" }}>
                <div className="text-white text-5xl font-bold text-center ">Climbing Shoe Quiz</div>
                <div className='text-white text-3xl font-bold text-center pt-5 pb-20'>Take our AI powered quiz and find the right shoe for you</div>

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


        </div>
    );
}

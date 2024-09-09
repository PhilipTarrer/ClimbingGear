export type QuizQuestion = {
    question: string;
    options: string[];
};

// Export the quiz questions
export const quizQuestions: QuizQuestion[] = [
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
        options: ['High Volume (Male shoe)', 'Low Volume (Female shoe)', 'No Preference'],
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

// Import required dependencies
import { NextApiRequest, NextApiResponse } from 'next';

// Utility function to call ChatGPT API
const callChatGPT = async (prompt: string): Promise<string> => {
  const apiKey = process.env.OPENAI_API_KEY;
  const apiUrl = 'https://api.openai.com/v1/chat/completions';

  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',  // Use 'gpt-3.5-turbo' if you're using that model
      messages: [
        { role: 'system', content: 'You are only answering questions about climbing shoes. Limit the answer to just the name of the shoe. For example La Sportiva Solution Female. Do not use any punctuation.' },
        { role: 'user', content: prompt },
      ],
      stream: false, // Keep this if you want to disable streaming responses
    }),    
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ChatGPT API: ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content; // Return the generated content
};

// Named export for POST requests
export async function POST(req: Request) {
  const { answers } = await req.json();

  if (!answers || !Array.isArray(answers)) {
    return new Response(JSON.stringify({ error: 'Answers are required' }), {
      status: 400,
    });
  }

  const prompt = `Based on these answers: ${answers.join(', ')}, recommend the best climbing shoe.`;

  try {
    const response = await callChatGPT(prompt);
    return new Response(JSON.stringify({ response }), {
      status: 200,
    });
  } catch (error) {
    console.error('Error calling ChatGPT API:', error);
    return new Response(JSON.stringify({ error: 'Failed to fetch response' }), {
      status: 500,
    });
  }
}

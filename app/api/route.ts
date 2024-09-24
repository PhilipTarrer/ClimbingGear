// Import required dependencies
import { NextApiRequest, NextApiResponse } from 'next';

// List of climbing shoe names
const shoeNames = [
  'Five Ten Team', 'Butora Acro Female', 'Butora Acro Male', 'Evolv Addict', 
  'Butora Altura', 'Five Ten Anasazi Female', 'Five Ten Anasazi Male', 
  'Evolv Astroman', 'Scarpa Chimera', 'La Sportiva Cobra', 'Evolv Defy Female', 
  'Evolv Defy Male', 'Scarpa Drago Female', 'Scarpa Drago Male', 'Five Ten Dragon', 
  'Butora Endeavor Female', 'Butora Endeavor Male', 'Scarpa Furia', 'Scarpa Furia S', 
  'Evolv Geshido Female', 'Evolv Geshido Male', 'Five Ten Grandstone', 
  'Scarpa Helix Female', 'Scarpa Helix Male', 'Five Ten Hiangle Female', 
  'Five Ten Hiangle Male', 'Scarpa Instinct VS Female', 'Scarpa Instinct VS', 
  'Scarpa Instinct VSR', 'La Sportiva Kataki', 'La Sportiva Katana Female', 
  'La Sportiva Katana Male', 'Butora Kira', 'Evolv Kronos Male', 'Scarpa Maestro', 
  'La Sportiva Maverink', 'La Sportiva Miura Female', 'La Sportiva Miura Male', 
  'Five Ten Moccasym', 'Black Diamond Momentum Female', 'Black Diamond Momentum Male', 
  'La Sportiva Otaki', 'Evolv Phantom', 'La Sportiva Python', 'Five Ten Rogue Female', 
  'Five Ten Rogue Male', 'Evolv Shakra', 'Evolv Shaman Female', 'Evolv Shaman Male', 
  'La Sportiva Solution Female', 'La Sportiva Solution Male', 'La Sportiva Solution', 
  'La Sportiva Tarantulace Female', 'La Sportiva Tarantulace Male', 'La Sportiva TC Pro', 
  'La Sportiva Testarossa', 'Scarpa Vapor Female', 'Scarpa Vapor Male', 'Evolv Zenist'
];

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
      model: 'gpt-3.5-turbo',
      messages: [
        { 
          role: 'system', 
          content: `You are only allowed to choose from the following list of climbing shoes: ${shoeNames.join(', ')}. Please respond with just the name of the shoe that best matches the user's preferences.` 
        },
        { 
          role: 'user', 
          content: prompt 
        },
      ],
      max_tokens: 10, // Limit to ensure minimal token usage
      stream: false,
    }),    
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch data from ChatGPT API: ${response.statusText}`);
  }

  const data = await response.json();
  return data.choices[0].message.content.trim(); // Return trimmed content to remove extra whitespace
};

// Named export for POST requests
export async function POST(req: Request) {
  const { answers } = await req.json();

  if (!answers || !Array.isArray(answers)) {
    return new Response(JSON.stringify({ error: 'Answers are required' }), {
      status: 400,
    });
  }

  // Include the answers as part of the user prompt
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

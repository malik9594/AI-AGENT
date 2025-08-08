// // app/api/chat/route.js
// export async function POST(req) {
//   try {
//     const body = await req.json();
//     const { message } = body;

//     if (!message) {
//       return new Response(JSON.stringify({ result: 'Message is required' }), {
//         status: 400,
//       });
//     }

//     // Simulate a smart response (replace with AI logic if needed)
//     const smartReply = `🤖 I received your message: "${message}"`;

//     return new Response(JSON.stringify({ result: smartReply }), {
//       status: 200,
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     });
//   } catch (error) {
//     return new Response(
//       JSON.stringify({ result: 'Something went wrong', error: error.message }),
//       {
//         status: 500,
//         headers: { 'Content-Type': 'application/json' },
//       }
//     );
//   }
// }


import { NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { message } = await req.json();

    const chatCompletion = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: message },
      ],
    });

    const result = chatCompletion.choices[0].message.content;
    return NextResponse.json({ result });
  } catch (error) {
    console.error('OpenAI Error:', error);
    return NextResponse.json({ error: 'Failed to get response from OpenAI' }, { status: 500 });
  }
}

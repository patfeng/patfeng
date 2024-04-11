import axios from 'axios';
import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env['OPENAI_API_KEY'], // This is the default and can be omitted
});

export async function getResponse(prompt,patCurrText){

    const stream = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [{ role: 'user', content: 'Say this is a test' }],
      stream: true,
    });
    for await (const chunk of stream) {
      const jsonObj = JSON.parse(chunk);
        patCurrText.text=patCurrText.text + jsonObj.response; 
    }


}

function buildQuery(prompt){
  
}
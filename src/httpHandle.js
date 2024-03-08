import axios from 'axios';

export async function  getResponse(prompt,patCurrText){

    const stream = await generateStream(prompt)
        for await (const chunk of stream) {
        const jsonObj = JSON.parse(chunk);
        patCurrText.text=patCurrText.text + jsonObj.response; 
    }
}

export async function* getIterableStream(body) {
    const reader = body.getReader();
    const decoder = new TextDecoder();
  
    while (true) {
      const { value, done } = await reader.read();
      if (done) {
        break;
      }
  
      const decodedChunk = decoder.decode(value, { stream: true });
      yield decodedChunk;
    }
  }
  
  export const generateStream = async (prompt) => {
    const response = await fetch(
        'http://localhost:11434/api/generate',
      {
        method: 'POST',
        body: JSON.stringify({
            "model": 'pat0.0',
            "prompt": prompt
        }),
        responseType: 'stream'
      }
    );
  
    if (response.status !== 200) {
      throw new Error(response.status.toString());
    }
  
    if (!response.body) {
      throw new Error('Response body does not exist');
    }
  
    return getIterableStream(response.body);
  };
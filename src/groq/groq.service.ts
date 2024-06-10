import { Injectable } from '@nestjs/common';
import Groq from 'groq-sdk';

@Injectable()
export class GroqService {
  private groq = new Groq({ apiKey: process.env.GROQ_API_KEY });

  async getChatCompletion(content: string) {
    console.log(content);
    const chatCompletion = await this.groq.chat.completions.create({
      messages: [{ role: 'user', content: content || 'tell me a joke' }],
      model: 'mixtral-8x7b-32768',
    });
    console.log(chatCompletion);
    return chatCompletion.choices[0].message.content;
  }
}

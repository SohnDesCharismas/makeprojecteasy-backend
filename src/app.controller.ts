import {
  Controller,
  Get,
  Post,
  Body,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { AppService } from './app.service';
import { GroqService } from './groq/groq.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly groqService: GroqService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
  @Post('groq')
  async getGroqData(@Body('userInput') userContent: string) {
    if (!userContent) {
      throw new HttpException(
        'Bad Request: Missing userInput',
        HttpStatus.BAD_REQUEST,
      );
    }
    return this.groqService.getChatCompletion(userContent);
  }
}

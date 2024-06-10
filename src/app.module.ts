import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GroqService } from './groq/groq.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, GroqService],
})
export class AppModule {}

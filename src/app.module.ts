import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EmailService } from './email/email.service';
import { RedisService } from './redis/redis.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, EmailService, RedisService],
})
export class AppModule {}

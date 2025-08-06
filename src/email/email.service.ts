import { Injectable } from '@nestjs/common';
import { MailerService } from './mailer.service';
import { RedisService } from 'src/redis/redis.service';

@Injectable()
export class EmailService {
  constructor(
    private readonly mailerService: MailerService,
    private readonly redisService: RedisService,
  ) {}

  async handleEmailConfirmation(data: { email: string }) {
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    await this.redisService.set(data.email, code);
    await this.mailerService.sendCode(data.email, code);
  }
}
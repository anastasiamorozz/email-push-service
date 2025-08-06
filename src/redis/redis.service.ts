import { Injectable } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisService {
  private redis = new Redis(process.env.REDIS_URL || 'redis://localhost:6379');

  async set(email: string, code: string) {
    await this.redis.set(`confirm:${email}`, code, 'EX', 5 * 60); // 5 хв
  }

  async get(email: string) {
    return await this.redis.get(`confirm:${email}`);
  }
}
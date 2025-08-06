import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class MailerService {
  private transporter = nodemailer.createTransport({
    host: 'smtp.example.com',
    port: 465,
    secure: true,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  async sendCode(email: string, code: string) {
    await this.transporter.sendMail({
      from: '"My App" <no-reply@myapp.com>',
      to: email,
      subject: 'Your confirmation code',
      text: `Your code is: ${code}`,
      html: `<b>Your code is: ${code}</b>`,
    });
  }
}
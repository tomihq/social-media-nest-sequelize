import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private readonly mailerService: MailerService) {}

  async sendMail(): Promise<void> {
    this.mailerService.sendMail({
      to: 'hernandeztomas584@gmail.com',
      from: process.env.NODEMAILER_USER,
      subject: `Hello`,
      text: 'Hello',
      html: '<b> hola </b>',
    });
  }
}

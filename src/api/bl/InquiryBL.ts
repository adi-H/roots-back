import { getRepository } from 'typeorm';
import { Inquiry } from '../entities/Inquiry';
import { Recipient } from '../entities/Recipient';
import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bhd1roots@gmail.com',
    pass: 'pupgas-2qehda-fAngoh'
  }
});

export class InquiryBL {
  public static async send(inquiry: Inquiry) {
    const inquiryRepository = getRepository(Inquiry);
    const recipientRepository = getRepository(Recipient);

    const recipient = await recipientRepository.findOne(inquiry.to.id)
    const mailOptions = {
      from: 'bhd1roots@gmail.com',
      to: recipient.emailAddress,
      subject: `תיבת פניות בה״ד 1 - ${inquiry.title}`,
      text: inquiry.content
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log(error);
        throw new Error("email was not send");
      }
    });

    return await inquiryRepository.save(inquiry);
  }
}

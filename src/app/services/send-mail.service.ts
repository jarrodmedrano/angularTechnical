import { Injectable } from '@angular/core';
import * as SendGrid from '@sendgrid/mail';

@Injectable()
export class SendMailService {

  constructor() {}

  logFormSubmission(submitted: {name: string, email: string, message: string, shouldAddToNewsletter: boolean}) {
    const {name, email, message, shouldAddToNewsletter} = submitted;
    const date = Date();
    const html = `
      <div>From: ${name}</div>
      <div>Email: <a href="mailto:${email}">${email}</a></div>
      <div>Date: ${date}</div>
      <div>Message: ${message}</div>
      <div>Should Add to Newsletter: ${shouldAddToNewsletter}</div>
    `;
    console.log(html);
  }

}

import { Injectable } from '@angular/core';
import * as SendGrid from '@sendgrid/mail';

@Injectable()
export class SendMailService {

  constructor() {}

  logFormSubmission(submitted: {}) {
    console.log(submitted);
  }

}

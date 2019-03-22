import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SendMailService } from '../../../services/send-mail.service';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css'],
  providers: [SendMailService]
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  submitSuccess: boolean;

  constructor(private sendMailService: SendMailService) { }

  ngOnInit() {
    this.contactForm = new FormGroup( {
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null, Validators.required),
      'shouldAddToNewsletter': new FormControl(false)
    });
  }

  isFieldValid(field: string) {
    return !this.contactForm.get(field).valid && this.contactForm.get(field).touched;
  }

  validateFields() {
    Object.keys(this.contactForm.controls).forEach(field => {
      const control = this.contactForm.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.submitSuccess = true;
      this.sendMailService.submitHandler(this.contactForm.value);
    } else {
      this.validateFields();
    }
  }

  onReset() {
    this.contactForm.reset();
    this.submitSuccess = false;
  }
}

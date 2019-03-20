import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contactform',
  templateUrl: './contactform.component.html',
  styleUrls: ['./contactform.component.css']
})
export class ContactFormComponent implements OnInit {
  contactForm: FormGroup;
  private submitSuccess: boolean;

  constructor() { }

  ngOnInit() {
    this.contactForm = new FormGroup( {
      'name': new FormControl(null, Validators.required),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'message': new FormControl(null, Validators.required),
      'shouldAddToNewsletter': new FormControl(false)
    });
  }

  validateFields() {
    Object.keys(this.contactForm.controls).forEach(field => {
      const control = this.contactForm.get(field);
      control.markAsTouched({ onlySelf: true });
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      this.contactForm.reset();
      this.submitSuccess = true;
    } else {
      this.validateFields();
    }
  }
}

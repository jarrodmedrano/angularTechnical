import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { ContactFormComponent } from './contactform.component';
import { FieldErrorComponent } from '..';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    FieldErrorComponent
  ],
  declarations: [
    ContactFormComponent
  ],
  providers: []
})
export class ContactFormModule { }

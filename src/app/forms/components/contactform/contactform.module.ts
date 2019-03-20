import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { ContactFormComponent } from './contactform.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  declarations: [
    ContactFormComponent
  ],
  providers: []
})
export class ContactFormModule { }

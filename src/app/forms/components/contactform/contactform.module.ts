import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';
import { ContactFormComponent } from './contactform.component';
import { FieldErrorComponent } from '..';
import { TextFieldComponent } from '../text-field/text-field.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    FieldErrorComponent,
    TextFieldComponent
  ],
  declarations: [
    ContactFormComponent,
    FieldErrorComponent,
    TextFieldComponent
  ],
  providers: []
})
export class ContactFormModule { }

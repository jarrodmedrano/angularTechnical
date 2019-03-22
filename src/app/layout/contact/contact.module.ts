import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { RecaptchaFormsModule } from 'ng-recaptcha/forms';

import { ContactComponent } from './contact.component';
import { ContactRoutingModule } from './contact-routing.module';
import { ContactFormComponent, FieldErrorComponent } from '../../forms/components';
import { TextFieldComponent } from '../../forms/components/text-field/text-field.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    ContactRoutingModule,
    RecaptchaModule,
    RecaptchaFormsModule
  ],
  declarations: [
    ContactComponent,
    ContactFormComponent,
    FieldErrorComponent,
    TextFieldComponent
  ],
  providers: []
})
export class ContactModule { }

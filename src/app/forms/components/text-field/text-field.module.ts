import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TextFieldComponent } from './text-field.component';
import { FieldErrorComponent } from '../field-error/field-error.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    FieldErrorComponent
  ],
  declarations: [
   TextFieldComponent
  ],
  providers: []
})
export class TextFieldModule { }

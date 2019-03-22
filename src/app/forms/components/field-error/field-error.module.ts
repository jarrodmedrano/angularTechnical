import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FieldErrorComponent } from './field-error.component';

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    FieldErrorComponent
  ],
  declarations: [
    FieldErrorComponent
  ],
  providers: []
})
export class FieldErrorModule { }


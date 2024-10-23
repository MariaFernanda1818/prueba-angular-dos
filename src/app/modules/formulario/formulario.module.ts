import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { FORMULARIO } from './formulario.routes';
import { FormularioComponent } from './formulario.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormularioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
  ],
})
export class FormularioModule { }
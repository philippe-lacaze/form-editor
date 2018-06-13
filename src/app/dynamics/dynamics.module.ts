import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PropertyEditorComponent } from './property-editor/property-editor.component';
import {FormsModule} from "@angular/forms";
import { FormEditorComponent } from './form-editor/form-editor.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [PropertyEditorComponent, FormEditorComponent],
  exports: [PropertyEditorComponent, FormEditorComponent, FormsModule]
})
export class DynamicsModule { }

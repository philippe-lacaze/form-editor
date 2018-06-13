import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestPropertyEditorComponent } from './test-property-editor/test-property-editor.component';
import {DynamicsModule} from "../dynamics/dynamics.module";

@NgModule({
  imports: [
    CommonModule,
    DynamicsModule
  ],
  declarations: [TestPropertyEditorComponent],
  exports: [
    TestPropertyEditorComponent
  ]
})
export class TestDynamicsModule { }

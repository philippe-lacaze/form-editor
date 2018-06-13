import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import {TestDynamicsModule} from "./test-dynamics/test-dynamics.module";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TestDynamicsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

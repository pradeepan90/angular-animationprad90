import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AppComponent} from './app.component'
import {OpenCloseComponent} from "./open-close/open-close.component"

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    OpenCloseComponent
  ],
  declarations: [ ],
  bootstrap: [AppComponent ]
})
export class AppModule { }
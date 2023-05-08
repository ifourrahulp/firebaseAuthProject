import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
@NgModule({
  declarations: [],
  imports: [BrowserModule],
  exports: [],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  name = 'Angular';
}

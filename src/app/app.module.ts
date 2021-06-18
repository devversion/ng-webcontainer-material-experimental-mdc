import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MatFormFieldModule } from '@angular/material-experimental/mdc-form-field';
import { MatInputModule } from '@angular/material-experimental/mdc-input';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

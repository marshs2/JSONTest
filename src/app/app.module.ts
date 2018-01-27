import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { TFundService } from './app.service';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    TFundService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

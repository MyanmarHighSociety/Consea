import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import {HttpClientModule} from '@angular/common/http';
import {HttpModule} from '@angular/http';

@NgModule({

  declarations: [
    AppComponent
  ],

  imports: [
    HttpClientModule, HttpModule,
    BrowserModule,
    BrowserModule,
    AppRoutingModule
  ],

  providers: [],

  bootstrap: [AppComponent]
})

export class AppModule { }

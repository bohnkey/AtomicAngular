import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {AtomicAngularModule} from '@coveo/atomic-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AtomicAngularModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

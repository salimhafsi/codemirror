import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CodemirrorModule } from '@ctrl/ngx-codemirror';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CodemirrorComponent } from './expression/codemirror/codemirror.component';
@NgModule({
  declarations: [
    AppComponent,
    CodemirrorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule, FormsModule , CommonModule,
    CodemirrorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

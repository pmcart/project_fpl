import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here


import { HeroDetailComponent } from './hero/hero-detail.component';
import { MainContainerComponent } from './main-container/main-container.component';
@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule ],
  declarations: [ AppComponent, HeroDetailComponent, MainContainerComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

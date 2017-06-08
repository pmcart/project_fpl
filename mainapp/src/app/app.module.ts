import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { HttpModule } from '@angular/http';
import { FormsModule }   from '@angular/forms'; // <-- NgModel lives here


import { MainContainerComponent } from './main-container/main-container.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { LocationDisplayComponent } from './location/location-display.component';
import { appRoutes } from './routes';

@NgModule({
  imports:      [ BrowserModule, HttpModule, FormsModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ AppComponent, MainContainerComponent, HeaderComponent, LoginComponent, LocationDisplayComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

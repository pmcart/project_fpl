import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { LocationDisplayComponent } from './location/location-display.component';

export const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'main',      component: LocationDisplayComponent },
    { path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },

];
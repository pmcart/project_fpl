import { Component} from '@angular/core';

@Component({
  selector: 'location-display',
  template: `
    <h1 [routerLink]="['/main']" >Login</h1>
  `
})
export class LoginComponent {

}

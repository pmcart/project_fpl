import {Component} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'header',
  template: `
    <div class='row'>
          <div class='col-md-12 text-center'>
            <h1 (click)="doSomething()">Locations Header</h1>
            </div>
        </div>
  `
})
export class HeaderComponent {

constructor(private router: Router){

}
  doSomething(){
    this.router.navigate(['/main'])
  }

}

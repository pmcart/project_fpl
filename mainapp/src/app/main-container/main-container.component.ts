import { Component, Input } from '@angular/core';

@Component({
  selector: 'maincontainer',
  styleUrls: ['app/main-container/main-container.css'],
  template: `
    <div class='container container-bg-blue'>
    <header></header>
      <router-outlet></router-outlet>
    </div>
  `
  
})

export class MainContainerComponent {

   
}


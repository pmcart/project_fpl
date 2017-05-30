import { Component, Input } from '@angular/core';
//import {Hero} from '../hero/hero';
//import { HeroService } from '../hero/hero.service';
import { OnInit } from '@angular/core';

@Component({
  selector: 'maincontainer',
  //providers: [HeroService],
  styleUrls: ['app/main-container/main-container.css'],
  template: `
    <div class='container'>
        <div class='row'>
            <p>Test</p>
        </div>
    </div>
  `
})
//          <h2>My Heroes</h2>
//   <hero-detail [hero]="selectedHero"></hero-detail>
//   <ul class="heroes">
//     <li *ngFor="let hero of heroes" (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
//     <span class="badge">{{hero.id}}</span> {{hero.name}} 
//   </li>
// </ul>
export class MainContainerComponent implements OnInit {
  
//   title = 'Tour of Heroes';
//   selectedHero: Hero;
//   heroes: Hero[];

   ngOnInit(): void {
//      this.heroService.getHeroes().then(heroes => this.heroes = heroes);
   }

//   constructor(private heroService: HeroService) { }

//   onSelect(hero: Hero): void {
//     this.selectedHero = hero;
//   }
}


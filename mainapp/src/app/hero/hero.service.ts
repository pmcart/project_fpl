import { Injectable } from '@angular/core';

import { Hero } from './hero';
import { HEROES } from './mock';

@Injectable()
export class HeroService {
 getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
}
import { Injectable } from '@angular/core';
import { HEROES } from '../data/mock-heroes';
import {Hero} from '../bean/hero.bean';

@Injectable()
export class HeroService {

  constructor() { }
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  // See the "Take it slow" appendix
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
}

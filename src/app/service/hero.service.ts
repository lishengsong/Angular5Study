import { Injectable } from '@angular/core';
import { HEROES } from '../data/mock-heroes';
import {Hero} from '../bean/hero.bean';

@Injectable()
export class HeroService {

  constructor() { }
  getHeroes(): Hero[] {
    return HEROES;
  }
}

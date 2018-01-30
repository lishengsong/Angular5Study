import { Injectable } from '@angular/core';
import { HEROES } from '../data/mock-heroes';
import {Hero} from '../bean/hero.bean';
import {Http} from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class HeroService {

  heroesUrl = 'https://test.gree.com/wcs/resources/store/20101/espot/HomePageMobileBanner';
  constructor(private http: Http) { }
  /*getHttpHeroes: any (){
  }*/
  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }
  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
  // See the "Take it slow" appendix
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simulate server latency with 2 second delay
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }
}

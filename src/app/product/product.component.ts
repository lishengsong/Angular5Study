import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../bean/hero.bean';
/*import {HEROES} from '../data/mock-heroes';*/
import {HeroService} from '../service/hero.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
 /* template: `
    <h1>{{title}}</h1>
    <h2>{{hero.name}} details!</h2>
    <div><label>id: </label>{{hero.id}}</div>
    <div>
      <label>name: </label>
      <input [(ngModel)]="hero.name"/>
    </div>
    `,*/
  styleUrls: ['./product.component.css'],
  providers: [HeroService]
})


export class ProductComponent implements OnInit {
 /* @Input() hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };   /!*表示一个输入属性*!/*/
  heroes: Hero[];
  selectedHero: Hero;
  constructor(private heroService: HeroService) { }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  ngOnInit(): void {
    console.log('ngOnInit');
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroesSlowly().then(heros => this.heroes = heros);
  }

}



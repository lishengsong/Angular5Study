import {Component, Input} from '@angular/core';
import {Hero} from '../bean/hero.bean';
import {HEROES} from '../data/mock-heroes';

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
  styleUrls: ['./product.component.css']
})


export class ProductComponent  {

 /* @Input() hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };   /!*表示一个输入属性*!/*/
  heroes = HEROES;
  selectedHero: Hero;
  constructor() { }
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

}



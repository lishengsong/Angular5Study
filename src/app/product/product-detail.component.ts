import {Component, Input} from '@angular/core';
import {Hero} from '../bean/hero.bean';
@Component({
  selector: 'app-product-detail',
  template: `
    <div *ngIf="hero">
      <h1>{{title}}</h1>
      <h2>{{hero.name}} details!</h2>
      <div><label>id: </label>{{hero.id}}</div>
      <div>
        <label>name: </label>
        <input [(ngModel)]="hero.name"/>
      </div>
    </div>
    `
})

export class ProductDetailComponent  {

  @Input() hero: Hero;  /*表示一个输入属性*/


}




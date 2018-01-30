import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../bean/hero.bean';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {HeroService} from '../service/hero.service';
import {Location} from '@angular/common';
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
    <button (click)="goBack()">Back</button>
    `
})

export class ProductDetailComponent  implements OnInit {


  @Input() hero: Hero;  /*表示一个输入属性*/

  constructor( private heroService: HeroService, private route: ActivatedRoute, private location: Location ) {}
  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(herof => this.hero = herof);
  }
  goBack(): void {
    this.location.back();
  }
}




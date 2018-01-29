import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes} from '@angular/router';
import {DashboardComponent} from './dashboard/dashboard.component';
import {ProductDetailComponent} from './product/product-detail.component';
import {ProductComponent} from './product/product.component';


const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'heroes-detail/:id', component: ProductDetailComponent },
  { path: 'heroes',     component: ProductComponent }
];
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class AppRoutingModule { }

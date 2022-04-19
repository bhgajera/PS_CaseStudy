import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { HttpClientModule } from '@angular/common/http';

const routes: Routes = [
  {
    path: '',
    component:ProductComponent
  },
];

@NgModule({
  declarations: [ ProductComponent],
  imports: [ CommonModule, HttpClientModule, RouterModule.forChild(routes)],
})
export class ProductModule { }

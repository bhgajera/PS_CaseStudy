import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerComponent } from './banner.component';
import { RouterModule, Routes } from '@angular/router';
import { ListItemDirective } from '../shared/split-text.directive';


const routes:Routes = [
  {
    path:'',
    component:BannerComponent
  }
]

@NgModule({
  declarations: [
    BannerComponent,
    ListItemDirective
  ],
  imports: [  
    CommonModule,
    RouterModule.forChild(routes)
  ],
  providers:[]
})
export class BannerModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicBoxComponent } from './dynamic-box.component';

const routes: Routes = [
  {
    path: '',
    component: DynamicBoxComponent
  },
];


@NgModule({
  declarations: [
    DynamicBoxComponent
  ],
  imports: [CommonModule,ReactiveFormsModule, FormsModule, RouterModule.forChild(routes)],
})
// export class CountdownTimerModule { }

export class DynamicBoxModule { }

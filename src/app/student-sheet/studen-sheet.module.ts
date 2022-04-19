import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { StudentSheetComponent } from './student-sheet.component';
import {HttpClientModule} from '@angular/common/http';
import { SortDirective } from '../shared/sort.directive';

const routes: Routes = [
  {
    path: '',
    component:StudentSheetComponent
  },
];


@NgModule({
  declarations: [StudentSheetComponent, SortDirective],
  imports: [ CommonModule, HttpClientModule, RouterModule.forChild(routes)],
})
export class StudentSheetModule { }

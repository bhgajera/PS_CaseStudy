import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CountdownTimerComponent } from './countdown-timer.component';
import { TimerButtonsComponent } from './timer-buttons/timer-buttons.component';
import { DisplayTimerComponent } from './display-timer/display-timer.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TimeStampComponent } from './time-stamp/time-stamp.component';
import { ClickTrackComponent } from './click-track/click-track.component';

const routes: Routes = [
  {
    path: '',
    component: CountdownTimerComponent
  },
];


@NgModule({
  declarations: [
    TimerButtonsComponent,
    CountdownTimerComponent,
    DisplayTimerComponent,
    TimeStampComponent,
    ClickTrackComponent
  ],
  imports: [CommonModule,ReactiveFormsModule, FormsModule, RouterModule.forChild(routes)],
})
export class CountdownTimerModule { }

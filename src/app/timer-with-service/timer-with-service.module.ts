import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TimerWithServiceComponent } from './timer-with-service.component';
import { TimerClickTrackComponent } from './timer-click-track/timer-click-track.component';
import { TimerDisplayComponent } from './timer-display/timer-display.component';
import { TimerTimeStampComponent } from './timer-time-stamp/timer-time-stamp.component';
import { TimerButtonsComponent } from './timer-buttons/timer-buttons.component';
import { RouterModule, Routes } from '@angular/router';
import { TimerService } from './timer.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    path: '',
    component: TimerWithServiceComponent
  },
];

@NgModule({
  declarations: [TimerWithServiceComponent, TimerClickTrackComponent, TimerDisplayComponent, TimerTimeStampComponent, TimerButtonsComponent],
  providers:[TimerService],
  imports: [
    ReactiveFormsModule, FormsModule,
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class TimerWithServiceModule { }

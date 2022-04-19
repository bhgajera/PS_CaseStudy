import { Component, OnInit } from '@angular/core';
import { TimeStamp } from 'src/app/shared/timer.model';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer-time-stamp',
  templateUrl: './timer-time-stamp.component.html',
  styleUrls: ['./timer-time-stamp.component.scss']
})
export class TimerTimeStampComponent implements OnInit {
  timeStamp:TimeStamp[] = [];
  constructor(private timer:TimerService) { 
    this.timeStamp = this.timer.timeStampList;
  }

  ngOnInit(): void {
  }

}

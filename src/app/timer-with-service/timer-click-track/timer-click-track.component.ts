import { Component, OnInit } from '@angular/core';
import { ClickData } from 'src/app/shared/timer.model';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer-click-track',
  templateUrl: './timer-click-track.component.html',
  styleUrls: ['./timer-click-track.component.scss']
})
export class TimerClickTrackComponent implements OnInit {

  clickData:ClickData;
  constructor(private timer:TimerService) { 
    this.clickData = this.timer.clickCount;
  }

  ngOnInit(): void {
  }


}

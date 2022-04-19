import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer-display',
  templateUrl: './timer-display.component.html',
  styleUrls: ['./timer-display.component.scss']
})
export class TimerDisplayComponent implements OnInit {
  timerData:Observable<number>;
  constructor(private timer:TimerService) {
    this.timerData = this.timer.timerCount;
    this.timerData.subscribe(x => {
      console.log(x);
    })
    // setTimeout(() => this.timerData = this.timer.timerCount,10000);
  }

  ngOnInit(): void {
    
  }

}

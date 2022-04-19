import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TimerService } from '../timer.service';

@Component({
  selector: 'app-timer-buttons',
  templateUrl: './timer-buttons.component.html',
  styleUrls: ['./timer-buttons.component.scss']
})
export class TimerButtonsComponent implements OnInit {
  timerForm = new FormGroup({
    timer: new FormControl(''),
  });
  constructor(private timer:TimerService) { }

  ngOnInit(): void {
  }

  timerSubmit(){
    const value = Number(this.timerForm.value.timer);
    if(value > 0){
      this.timer.startTimer(value);
      this.timerForm.patchValue({timer:null});
   } else if(this.timer.isRunning){
     this.timer.pauseTimer = true;
    }
    else {
      this.timer.startTimer();
   }
  }

  resetForm(){
    this.timerForm.reset();
    this.timer.stopTimer();
   }


}

import { Component,EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Form, FormControl, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-timer-buttons',
  templateUrl: './timer-buttons.component.html',
  styleUrls: ['./timer-buttons.component.scss']
})
export class TimerButtonsComponent implements OnInit {
 @Output() startTimer:EventEmitter<string> = new EventEmitter();
 @Output() stopTimer:EventEmitter<string> = new EventEmitter();
 private isTimerRunning:any = null;
 timerForm = new FormGroup({
  timer: new FormControl(''),
});
  constructor() { }

  ngOnInit(): void {
  }
  
  timerSubmit():void{
     if(this.timerForm.value.timer){
        this.startTimer.emit(this.timerForm.value.timer);
        this.isTimerRunning = true;
        this.timerForm.patchValue({timer:null});
     } else if(this.isTimerRunning){
        this.isTimerRunning = false; 
        this.stopTimer.emit();
     }
      else {
      this.isTimerRunning = true; 
      this.startTimer.emit();
     }
  }

  resetForm(){
   this.timerForm.reset();
   this.isTimerRunning= false;
   this.stopTimer.emit('reset');
  }
}

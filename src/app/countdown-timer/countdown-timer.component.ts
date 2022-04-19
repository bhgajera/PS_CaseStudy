import { Component, OnInit } from '@angular/core';
import { concatMap, map, Observable, of } from 'rxjs';
import { ClickData, TimeStamp } from '../shared/timer.model';





@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.scss']
})


export class CountdownTimerComponent implements OnInit {
  timerData!: number;
  interval: any;
  isTimerRunning:boolean = false;
  timeStamp:TimeStamp[] = [];
  clickData:ClickData = {started:0, paused:0};
  constructor() {

   }

  ngOnInit(): void {
    
    
  }



  startCountDown(value:string | null){
    
    if(value){
      this.timeStamp = [];
      this.clickData = new ClickData();
      this.timerData = Number(value);
    }
    if(this.timerData){
      this.clickData.started++;
      clearInterval(this.interval);
        this.isTimerRunning = true;
        this.interval = setInterval(() => {
             this.timerData--
             if (this.timerData <= 0){
              this.stopCountDown('finish');
             }
        },1000)
        this.timeStamp.push({name:'started',date: new Date()})
    }
    
  }

  stopCountDown(value:string){
  
    if(value === 'finish') {
      this.timeStamp.push({name:'stoped',date: new Date()})
      this.clickData.paused++;
    } else if(value === 'reset') {
      this.timeStamp = [];
      this.clickData = new ClickData();
      this.timerData = Number(value);
    }else if(this.timerData) {
      this.timeStamp.push({name:'paused',date: new Date()});
      this.clickData.paused++;
    }
    
   
    this.isTimerRunning = false;
    clearInterval(this.interval);
  }

  

}
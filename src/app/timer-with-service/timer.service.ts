import { Injectable } from "@angular/core";
import { Subject, interval, Observable, take, takeWhile, tap, map, Subscriber, Subscription, Timestamp } from "rxjs";
import { TimeInterval } from "rxjs/internal/operators/timeInterval";
import { ClickData, TimeStamp } from "../shared/timer.model";


@Injectable()

export class TimerService {
    private timerData:number = 0;
    private numbers:Observable<number> = interval(1000);
    private timer:Subject<number> = new Subject();
    private isPaused:boolean = false;
    private time$:Subscription = new Subscription();
    // private timeStampList$:Subject<TimeStamp[]> = new Subject();
    private timeStamp:TimeStamp[] = [];
    private clickData:ClickData = {started:0, paused:0};
    constructor(){
      
    }

    startTimer(value?:number){
      if(typeof value != 'undefined' && value >= 0){
        this.stopTimer();
          this.timerData = value;
          this.timer.next(this.timerData);
      }

      if(this.timerData){
        this.clickData.started++;
        this.timeStamp.push({name:'started',date: new Date()});
      }

      this.isPaused = false;
      this.time$.unsubscribe();
      // this.timeStampList.next(this.timeStamp)
      this.time$ = this.numbers.pipe(
            takeWhile(() => { 
              if(this.timerData <= 0){
                this.isPaused = true;
              }
             return this.timerData > 0 && !this.isPaused;
            }),
            tap(() => { 
               this.timerData-- ;
               if(this.timerData <= 0){
                 this.timeStamp.push({name:'stoped',date: new Date()});
               }
               this.timer.next(this.timerData)}),
            map(x => this.timerData)
          ).subscribe();
    }

    get timerCount():Observable<number>{
      return this.timer;
    }

    get isRunning(){
      return !this.isPaused;
    }

    set pauseTimer(value:boolean){
      this.clickData.paused++;
      this.timeStamp.push({name:'paused',date: new Date()});
      this.isPaused = value;
    }
    
    get timeStampList(){
      return this.timeStamp;
    }

    get clickCount(){
      return this.clickData;
    }

    stopTimer(){
      this.clickData.started = 0
      this.clickData.paused = 0;
      this.timeStamp.length = 0;
      this.timerData = 0;
      this.time$.unsubscribe();
      this.timer.next(this.timerData);
    }




    startCountDown(value:string | null){
    
        // if(value){
        //   this.timeStamp = [];
        //   this.clickData = new ClickData();
        //   this.timerData = Number(value);
        // }
        // if(this.timerData){
        //   this.clickData.started++;
        //   clearInterval(this.interval);
        //     this.isTimerRunning = true;
        //     this.interval = setInterval(() => {
        //          this.timerData--
        //          if (this.timerData <= 0){
        //           this.stopCountDown('finish');
        //          }
        //     },1000)
        //     this.timeStamp.push({name:'started',date: new Date()})
        // }
        
      }
    
      stopCountDown(value:string){
      
        // if(value === 'finish') {
        //   this.timeStamp.push({name:'stoped',date: new Date()})
        //   this.clickData.paused++;
        // } else if(value === 'reset') {
        //   this.timeStamp = [];
        //   this.clickData = new ClickData();
        //   this.timerData = Number(value);
        // }else if(this.timerData) {
        //   this.timeStamp.push({name:'paused',date: new Date()});
        //   this.clickData.paused++;
        // }
        
       
        // this.isTimerRunning = false;
        // clearInterval(this.interval);
      }
}
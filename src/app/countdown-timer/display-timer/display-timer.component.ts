import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-display-timer',
  templateUrl: './display-timer.component.html',
  styleUrls: ['./display-timer.component.scss']
})
export class DisplayTimerComponent implements OnInit {
  @Input() timerData!:number;
  constructor() { }

  ngOnInit(): void {
  
  }

}

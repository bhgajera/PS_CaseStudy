import { Component, Input, OnInit } from '@angular/core';
import { TimeStamp } from 'src/app/shared/timer.model';


@Component({
  selector: 'app-time-stamp',
  templateUrl: './time-stamp.component.html',
  styleUrls: ['./time-stamp.component.scss']
})
export class TimeStampComponent implements OnInit {
@Input() timeStamp:TimeStamp[] = [];
  constructor() { }

  ngOnInit(): void {
  }

}

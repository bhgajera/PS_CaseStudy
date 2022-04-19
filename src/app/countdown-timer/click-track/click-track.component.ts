import { Component, Input, OnInit } from '@angular/core';
import { ClickData } from 'src/app/shared/timer.model';


@Component({
  selector: 'app-click-track',
  templateUrl: './click-track.component.html',
  styleUrls: ['./click-track.component.scss']
})
export class ClickTrackComponent implements OnInit {
 @Input() clickData!:ClickData;
  constructor() { }

  ngOnInit(): void {
  }

}

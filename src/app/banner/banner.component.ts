import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  floatingText:string = 'floating text';
  floatingTextArry:string[] = [];
  constructor() { }

  ngOnInit(): void {
    this.floatingTextArry = this.floatingText.split('');
  }

}

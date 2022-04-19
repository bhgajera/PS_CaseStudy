import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-dynamic-box',
  templateUrl: './dynamic-box.component.html',
  styleUrls: ['./dynamic-box.component.scss']
})
export class DynamicBoxComponent implements OnInit {
  boxList:any[] = [];
  counter: any = 0;
  box:string[] = new Array(20).fill('');
  constructor() { }

  ngOnInit(): void {
    this.boxList = [...this.box];
  }
  alertBox(index:number){
    alert(index);
  }


  @HostListener('window:scroll', ['$event'])
  windowScroll(e: any) {
    if(window.scrollY + window.innerHeight >= e.target['documentElement'].scrollHeight){
      this.boxList.push(...this.box);
    }
  }

}

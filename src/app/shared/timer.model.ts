export interface TimeStamp {
    name:'started' | 'paused' | 'stoped';
    date:Date
  }
  
  export class ClickData {
    started:number = 0;
    paused:number = 0;
  }
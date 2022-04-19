import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface StudentMarkSheet {
  rollNo: number,
  name: string,
  english: string,
  mathematics: string,
  biology: string,
  chemistry: string,
  psychology: string,
  sociology: string,
  geography: string,
}

interface Order {
  rollNo: string,
  Name: string,
  English: string,
  Mathematics: string,
  Biology: string,
  Chemistry: string,
  Psychology: string,
  Sociology: string,
  Geography: string,
}

interface UserModel {
  userName: string,
  customerName: string,
  userId: number
}
@Component({
  selector: 'app-student-sheet',
  templateUrl: './student-sheet.component.html',
  styleUrls: ['./student-sheet.component.scss']
})
export class StudentSheetComponent implements OnInit {
  studentList: StudentMarkSheet[] = [];
  studentDefault:StudentMarkSheet[] = [];
  user: UserModel = { userName: 'dummy', customerName: 'Jameer', userId: 1 };
  key: string = 'userName';
  order!:Order;
  // Property name stored in JS variable

  constructor(private http: HttpClient) {
    const customerUserName = this.user[this.key as keyof UserModel];
    debugger;
  }

  ngOnInit(): void {
    this.http.get('./assets/json/marksheet.json').subscribe((result: any) => {
      this.studentList = result;
      this.studentDefault = [...result];
      debugger;
    })
  }

  shortColumn(k: string) {
    this.studentList = this.studentList.sort((a: StudentMarkSheet, b: StudentMarkSheet) => {
      return b[k as keyof StudentMarkSheet] > a[k as keyof StudentMarkSheet] ? 1 : -1;
    })
  }

  updateList(list:StudentMarkSheet[]){
    this.studentList = [...list];
  }

}

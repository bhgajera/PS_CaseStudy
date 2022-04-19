import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  productList: any[] = [];
  productDefault:any[] = [];
  isGrid:boolean = true;

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
    this.http.get('./assets/json/product.json').subscribe((result: any) => {
      this.productList = result;
      this.productDefault = [...result];
    })
  }
  priceFilter(event:Event){
    const value =(<HTMLInputElement>event.target).value;
    if(value && value != ''){
      this.productList = this.productDefault.filter(x => x.price > value );
    } else {
      this.productList = [...this.productDefault];
    }
  }

}

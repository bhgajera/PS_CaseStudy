import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { Sort } from './sort';


@Directive({
  selector: '[appSort]'
})
export class SortDirective {

  @Input() appSort: Array<any> = [];
  @Input() defaultData: Array<any> = [];
  @Output() updateSort: EventEmitter<any> = new EventEmitter();

  constructor(private renderer: Renderer2, private targetElement: ElementRef) { }

  @HostListener("click")
  sortData() {

    const sort = new Sort();
    const elem = this.targetElement.nativeElement;

    const order = elem.getAttribute("data-order");

    const type = elem.getAttribute("data-type");

    const property = elem.getAttribute("data-name");

    if (order === "desc") {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute("data-order", "");
      this.updateSort.emit(this.appSort);
    } else if(order === "asc") {
      this.appSort.sort(sort.startSort(property, order, type));
      elem.setAttribute("data-order", "desc");
      this.updateSort.emit(this.appSort);
    } else {
      this.updateSort.emit(this.defaultData);
      elem.setAttribute("data-order", "asc");
    }

  }

}
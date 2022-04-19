import { Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  selector: '[appListItem]'
})
export class ListItemDirective {

  @Input() appListItem: any;

  constructor(public template: TemplateRef<any>) {
   
   }

}








// import { Directive, ElementRef, Renderer2 } from "@angular/core";

// @Directive({
//     selector:"[split-text]"
// })

// export class SplitTextDirective {
//     constructor(private el:ElementRef, renderer:Renderer2){
//         console.log(el.nativeElement.textContent);
//         el.nativeElement.style.backgroundColor = 'red';
//         renderer.setStyle(el.nativeElement,'background-color','green');
//         debugger;
//     }
// }
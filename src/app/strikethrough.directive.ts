import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appStrikethrough]'
})
export class StrikethroughDirective {
// imported HostListener and used it to define the events that will
//  be initiated by user actions, the first one being a click that creates
//  a line-through and the second one being a double click which changes the
//   text-decoration to none thus removing the line-through. 
  constructor(private elem:ElementRef) {}
  // onclick the selected element applies the lne-through property
@HostListener('click') onClicks(){
  this.textDeco('line-through');
}
// onDoubleClick the element removes the decoration line-through
@HostListener('dblclick') onDoubleClicks(){
  this.textDeco('None');
}

  // define the line-through as a textDeco function
  private textDeco(action:string){
    this.elem.nativeElement.style.textDecoration=action;
  }

}

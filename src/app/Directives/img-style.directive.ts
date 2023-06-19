import { Directive, ElementRef, HostListener, Input } from '@angular/core';
// class decorator
@Directive({
  selector: '[ImgStyle]',
})
export class ImgStyleDirective {
  // property decorator
 @Input() radius1: string = '60px';
 @Input('ImgStyle') radius2: string = '15px';
  // document.getElement.style.....=value
  // ElementRef.nativeElement
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.borderRadius = '30px';
  }

  //events
  //method decorator
  @HostListener('mouseover') func1() {
    // this.element.nativeElement.style.borderRadius = '50px';
    this.element.nativeElement.style.borderRadius = `${this.radius1}`;
    this.element.nativeElement.style.opacity = '.7';
    // this.element.nativeElement.style.border = '4px solid red';
  }
  @HostListener('mouseout') func2() {
    // this.element.nativeElement.style.borderRadius = '10px';
    this.element.nativeElement.style.borderRadius = `${this.radius2}`;
    this.element.nativeElement.style.opacity = '1';
  }
}

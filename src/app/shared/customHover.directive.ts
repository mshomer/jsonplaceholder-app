import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[customHover]'
})
export class CustomHoverDirective {

  @Input() size : number;

  private viewHeight : number;

  constructor(private el : ElementRef ) { 
    this.viewHeight = el.nativeElement.style.height;
    this.size = 100;
  }

  @HostListener("focus") onfocus() {
    this.el.nativeElement.style.height = this.viewHeight + this.size + 'px';
  }

  @HostListener("focusout") onfocusout() {
    this.el.nativeElement.style.height = this.viewHeight;
  }

}

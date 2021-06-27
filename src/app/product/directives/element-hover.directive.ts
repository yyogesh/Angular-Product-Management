import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appElementHover]'
})
export class ElementHoverDirective {

  constructor(private _elementRef: ElementRef, private renderer: Renderer2) {
    this.renderer.setStyle(this._elementRef.nativeElement, 'backgroundColor', 'gray');
  }

  @HostListener('mouseover') onMouseOver() {
    const element = this._elementRef.nativeElement.querySelector('.text');
    if (element) {
      this.renderer.setStyle(element, 'backgroundColor', 'red');
    }
  }

  @HostListener('mouseout') onMouseout() {
    const element = this._elementRef.nativeElement.querySelector('.text');
    if (element) {
      this.renderer.setStyle(element, 'backgroundColor', 'white');
    }
  }

}

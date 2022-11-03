import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {
    setTimeout(() => {
      let e = this.el.nativeElement.focus();
    }, 0);
  }

}

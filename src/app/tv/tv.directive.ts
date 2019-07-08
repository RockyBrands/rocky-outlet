import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[tv-host]',
})
export class TvDirective {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

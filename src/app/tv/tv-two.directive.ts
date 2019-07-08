import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[tv-host-two]',
})
export class TvDirectiveTwo {
  constructor(public viewContainerRef: ViewContainerRef) { }
}

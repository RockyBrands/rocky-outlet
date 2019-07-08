import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { TvDirectiveTwo } from './tv-two.directive';
import { TvItemTwo }      from './tv-item-two';
import { TvThreeComponent } from './tv-three.component';

@Component({
  selector: 'tv-pic-two-banner',
  template: `
              <div class="tv-banner-two">
                <ng-template tv-host-two></ng-template>
              </div>
            `
})
export class TvBannerTwoComponent implements OnInit, OnDestroy {
  @Input() picsTwo: TvItemTwo[];
  currentTvIndex = -1;
  @ViewChild(TvDirectiveTwo) tvHostTwo: TvDirectiveTwo;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponentTwo();
    this.getPicsTwo();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponentTwo() {
    this.currentTvIndex = (this.currentTvIndex + 1) % this.picsTwo.length;
    let tvItemTwo = this.picsTwo[this.currentTvIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(tvItemTwo.component);

    let viewContainerRef = this.tvHostTwo.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<TvThreeComponent>componentRef.instance).data = tvItemTwo.data;
  }

  getPicsTwo() {
    this.interval = setInterval(() => {
      this.loadComponentTwo();
    }, 3000);
  }
}

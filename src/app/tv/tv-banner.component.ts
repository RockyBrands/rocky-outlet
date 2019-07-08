import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { TvDirective } from './tv.directive';
import { TvItem }      from './tv-item';
import { TvTwoComponent } from './tv-two.component';

@Component({
  selector: 'tv-pic-banner',
  template: `
              <div class="tv-banner">
                <ng-template tv-host></ng-template>
              </div>
            `
})
export class TvBannerComponent implements OnInit, OnDestroy {
  @Input() pics: TvItem[];
  currentTvIndex = -1;
  @ViewChild(TvDirective) tvHost: TvDirective;
  interval: any;

  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
    this.getPics();
  }

  ngOnDestroy() {
    clearInterval(this.interval);
  }

  loadComponent() {
    this.currentTvIndex = (this.currentTvIndex + 1) % this.pics.length;
    let tvItem = this.pics[this.currentTvIndex];

    let componentFactory = this.componentFactoryResolver.resolveComponentFactory(tvItem.component);

    let viewContainerRef = this.tvHost.viewContainerRef;
    viewContainerRef.clear();

    let componentRef = viewContainerRef.createComponent(componentFactory);
    (<TvTwoComponent>componentRef.instance).data = tvItem.data;
  }

  getPics() {
    this.interval = setInterval(() => {
      this.loadComponent();
    }, 3000);
  }
}

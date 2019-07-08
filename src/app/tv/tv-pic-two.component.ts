import { Component, Input }  from '@angular/core';

import { TvThreeComponent }       from './tv-three.component';

@Component({
  template: `
    <div class="tv-pics-two">
      <img src="{{data.tvpictwo}}">
    </div>
  `
})
export class TvPicTwoComponent implements TvThreeComponent {
  @Input() data: any;
}

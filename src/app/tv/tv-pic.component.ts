import { Component, Input }  from '@angular/core';

import { TvTwoComponent }       from './tv-two.component';

@Component({
  template: `
    <div class="tv-pics">
      <img src="{{data.tvpic}}">
    </div>
  `
})
export class TvPicComponent implements TvTwoComponent {
  @Input() data: any;
}

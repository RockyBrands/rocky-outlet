import { Injectable }           from '@angular/core';

import { TvPicTwoComponent } from './tv-pic-two.component';
import { TvItemTwo }      from './tv-item-two';

@Injectable()
export class TvServiceTwo {
  getPicsTwo() {
    return [
      new TvItemTwo(TvPicTwoComponent, {tvpictwo: './assets/images/lehigh_burger.jpg'}),
      new TvItemTwo(TvPicTwoComponent, {tvpictwo: './assets/images/durango_burger.jpg'})
    ];
  }
}

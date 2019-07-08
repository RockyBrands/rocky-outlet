import { Injectable }           from '@angular/core';

import { TvPicComponent } from './tv-pic.component';
import { TvItem }               from './tv-item';

@Injectable()
export class TvService {
  getPics() {
    return [
      new TvItem(TvPicComponent, {tvpic: './assets/images/teriyaki_burger.jpg'}),
      new TvItem(TvPicComponent, {tvpic: './assets/images/slaw_burger.jpg'})
    ];
  }
}

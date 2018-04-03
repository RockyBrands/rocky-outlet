import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from './../animations';

@Component({
  selector: 'return',
  templateUrl: './return.component.html',
  styleUrls: ['./return.component.css'],
  animations: [ slideInDownAnimation ],
})
export class ReturnComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.width')  width = '100%';
  title = 'Return Policy';
}

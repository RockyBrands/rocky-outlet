import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from './../animations';

@Component({
  selector: 'featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css'],
  animations: [ slideInDownAnimation ],
})
export class FeaturedComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.width')  width = '100%';
  title = 'Featured Product';
  sale_info = 'The RKYS154 was originally $139.99, now only $69.99... Whoa.';
  intro_image = "./assets/images/rkys154_featured.jpg";
}

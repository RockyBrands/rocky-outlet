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
  sale_info = 'Get this, the RKS0238, yes that is THE Venator Rocky Claw is only $77.49. What are you waiting for?!';
  intro_image = "./assets/images/rks0238_featured.jpg";
}

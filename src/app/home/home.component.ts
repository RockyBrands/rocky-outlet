import { Component, HostBinding } from "@angular/core";
import { slideInDownAnimation } from './../animations';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [ slideInDownAnimation ],
})

export class HomeComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.width')  width = '100%';
  intro_image_mobile = "./assets/images/mobile_calltoaction.jpg";
  intro_image_desktop = "./assets/images/desktop_calltoaction_03.jpg";
  products_image = "./assets/images/durango_kids_products_mobile.jpg";
  attractions_image = "./assets/images/tourist_attractions_mobile.jpg";
  grill_image = "./assets/images/boot_grill_mobile.jpg";
  featured_image = "./assets/images/grill_display_mobile.jpg";
}

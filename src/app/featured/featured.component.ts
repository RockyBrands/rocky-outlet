import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from './../animations';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css'],
  animations: [ slideInDownAnimation ],
})
export class FeaturedComponent {
  constructor(private meta: Meta, private titleService: Title) {
   this.meta.addTag({ name: 'description', content: 'Find the best featured door busters currently being offered at the Rocky Outdoor Gear Store.' });
   this.titleService.setTitle( 'Featured Product' );
  }

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.width')  width = '100%';
  title = 'Featured Product';
  sale_info = "Be sure to check back every now and again to see some of our favorites.";
  intro_image_mobile = "./assets/images/featured-banner-mobile.jpg";
  intro_image_desktop = "./assets/images/featured-banner-desktop.jpg";
  about_featured = "Get ready to play in the mud with our massive selection of waterproof boots from the world-renowned MUCK BOOT COMPANY.";
}

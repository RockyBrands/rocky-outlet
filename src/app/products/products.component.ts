import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from './../animations';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [ slideInDownAnimation ],
})
export class ProductsComponent {
  constructor(private meta: Meta, private titleService: Title) {
   this.meta.addTag({ name: 'description', content: 'Come to the Rocky Outdoor Gear Store to find a wide variety of products including footwear, apparel, camping gear, firearms, and more.' });
   this.titleService.setTitle( 'Products' );
  }

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.width')  width = '100%';
  title = 'Products';
  intro_image = './assets/images/rocky_shirts_banner.jpg';
  products_image_01 = './assets/images/georgia_boot_mobile.jpg';
  products_image_02 = './assets/images/carhartt_coats_mobile.jpg';
  products_image_03 = './assets/images/durango_boots_mobile.jpg';
  products_image_04 = './assets/images/rocky_hunting_boot_mobile.jpg';
  products_image_05 = './assets/images/venator_apparel_mobile.jpg';
  products_image_06 = './assets/images/rocky_duty_boot_mobile.jpg';
  products_image_07 = './assets/images/xtratuf-products.jpg';
  products_image_08 = './assets/images/rocky-casual.jpg';
  products_image_09 = './assets/images/scrubs_mobile.jpg';
  products_image_10 = './assets/images/camping-equipment.jpg';
  products_image_12 = './assets/images/bows_mobile.jpg';
  products_image_13 = './assets/images/ammo_mobile.jpg';
  products_image_14 = './assets/images/firearms.jpg';
}

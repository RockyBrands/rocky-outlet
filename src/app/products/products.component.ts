import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from './../animations';

@Component({
  selector: 'products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  animations: [ slideInDownAnimation ],
})
export class ProductsComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.width')  width = '100%';
  title = 'Products';
  intro_image = './assets/images/durango_kids_products.jpg';
  products_image_01 = './assets/images/georgia_boot_mobile.jpg';
  products_image_02 = './assets/images/carhartt_coats_mobile.jpg';
  products_image_03 = './assets/images/durango_boots_mobile.jpg';
  products_image_04 = './assets/images/rocky_hunting_boot_mobile.jpg';
  products_image_05 = './assets/images/hunting_bibs_mobile.jpg';
  products_image_06 = './assets/images/rocky_duty_boot_mobile.jpg';
  products_image_07 = './assets/images/bearpaw_mobile.jpg';
  products_image_08 = './assets/images/columbia_shoes_mobile.jpg';
  products_image_09 = './assets/images/scrubs_mobile.jpg';
  products_image_10 = './assets/images/grill_display_mobile.jpg';
  products_image_11 = './assets/images/home_decor_01_mobile.jpg';
}

import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from './../animations';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'attractions',
  templateUrl: './attractions.component.html',
  styleUrls: ['./attractions.component.css'],
  animations: [ slideInDownAnimation ],
})
export class AttractionsComponent {
  constructor(private meta: Meta, private titleService: Title) {
   this.meta.addTag({ name: 'description', content: 'Athens and Hocking counties are home to many activities. Spend a night in a cabin, float down the river in a kayak, or head to Casa for trivia.' });
   this.titleService.setTitle( 'Attractions' );
  }

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.width')  width = '100%';
  title = 'Attractions';
  intro_image = "./assets/images/tourist_attractions.jpg";
  attractions_image_01 = "./assets/images/hvsr_mobile.jpg";
  attractions_image_02 = "./assets/images/hocking_hills_mobile.jpg";
  attractions_image_03 = "./assets/images/athens_mobile.jpg";
  attractions_image_04 = "./assets/images/bike_rental_mobile.jpg";
  attractions_image_05 = "./assets/images/nelsonville_mobile.jpg";
  attractions_image_06 = "./assets/images/bike_path_mobile.jpg";
  attractions_image_07 = "./assets/images/stuarts_mobile.jpg";
  attractions_image_08 = "./assets/images/wayne_national_forest_mobile.jpg";
}

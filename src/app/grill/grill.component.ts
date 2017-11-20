import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from './../animations';

@Component({
  selector: 'grill',
  templateUrl: './grill.component.html',
  styleUrls: ['./grill.component.css'],
  animations: [ slideInDownAnimation ],
})
export class GrillComponent {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.width')  width = '100%';
  title = 'The Boot Grill';
  intro_image = "./assets/images/boot_grill.jpg";

  monday_date = '11/20';
  monday_main = 'Chicken Alfredo';
  monday_sides = 'broccoli, cheesy garlic bredsticks';
  monday_soup = 'Cream of Broccoli Soup';

  tuesday_date = '11/21';
  tuesday_main = 'Pizza';
  tuesday_sides = '3 cheese, pepperoni, veggie, bacon cheeseburger';
  tuesday_soup = 'Tomato Bisque';

  wednesday_date = '11/22';
  wednesday_main = 'Wings';
  wednesday_sides = 'celery, ranch';
  wednesday_soup = 'Mushroom Brie';

  thursday_date = '11/23';
  thursday_main = 'Happy Thanksgiving!';
  // thursday_sides = 'a large heaping of family time';
  // thursday_soup = 'At your own house.';

  friday_date = '11/24';
  friday_main = 'Load Your Own Nachos';
  friday_sides = 'shredded pork, cheese, chili, jalapeño peppers, other toppings';
  friday_soup = 'Pumpkin, Apple, and Bacon Soup';

  saturday_date = '11/25';

  sunday_date = '11/26';
}

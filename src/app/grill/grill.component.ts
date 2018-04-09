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

  monday_date = '04/09';
  monday_main = 'Chicken Alfredo';
  monday_sides = 'spinach salad, California veggies, garlic toast';
  monday_soup = 'Seven Bean Medley';

  tuesday_date = '04/10';
  tuesday_main = 'Stuffed Green Peppers';
  tuesday_sides = 'mashed potatoes, gravy, mixed vegetables';
  tuesday_soup = 'Broccoli Cheese';

  wednesday_date = '04/11';
  wednesday_main = 'Grouper';
  wednesday_sides = 'macaroni & cheese, cole slaw';
  wednesday_soup = 'Cheddar Baked Potato';

  thursday_date = '04/12';
  thursday_main = 'Pizza Bar';
  thursday_sides = 'supreme, pepperoni, veggie, cheese';
  thursday_soup = 'Baja Chicken Enchilada';

  friday_date = '04/13';
  friday_main = 'Fried Chicken';
  friday_sides = 'mashed potatoes, gravy, corn';
  friday_soup = 'Stuffed Green Pepper';

  saturday_date = '04/14';

  sunday_date = '04/15';
}

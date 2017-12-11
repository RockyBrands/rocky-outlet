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

  monday_date = '12/04';
  monday_main = 'Chicken Noodles';
  monday_sides = 'mashed potatoes and gravy, corn';
  monday_soup = 'Tomato Bisque';

  tuesday_date = '12/05';
  tuesday_main = 'Pork Chops';
  tuesday_sides = 'cauliflower, baked beans';
  tuesday_soup = 'Mushroom Brie';

  wednesday_date = '12/06';
  wednesday_main = 'Beans';
  wednesday_sides = 'fried potatoes, corn bread';
  wednesday_soup = 'Vegetable Soup';

  thursday_date = '12/07';
  thursday_main = 'Chicken Cavatappi';
  thursday_sides = 'broccoli and cheese, garlic toast';
  thursday_soup = 'Potato and Cheese';

  friday_date = '12/08';
  friday_main = 'Grouper';
  friday_sides = 'macaroni and cheese, honey sriracha cheese sticks';
  friday_soup = 'Chicken Gumbo';

  saturday_date = '12/09';

  sunday_date = '12/10';
}

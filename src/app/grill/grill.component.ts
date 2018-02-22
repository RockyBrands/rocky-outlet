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

  monday_date = '02/19';
  monday_main = 'Stuffed Shells';
  monday_sides = 'spinach salad, California vegetables, garlic toast';
  monday_soup = 'Beef Noodle Soup';

  tuesday_date = '02/20';
  tuesday_main = 'Bread Boules';
  tuesday_sides = 'tomato bisque, vegetable soup, broccoli cheese, French onion';
  tuesday_soup = 'Butternut Squash Bisque';

  wednesday_date = '02/21';
  wednesday_main = 'Meatloaf';
  wednesday_sides = 'mashed potatoes, gravy, green beans, rolls';
  wednesday_soup = 'Minestrone';

  thursday_date = '02/22';
  thursday_main = 'Swedish Meatballs';
  thursday_sides = 'rice, noodles, peas & carrots';
  thursday_soup = '3 Bean with Ham';

  friday_date = '02/23';
  friday_main = 'Tuna Noodle Casserole';
  friday_sides = 'lima beans, corn';
  friday_soup = 'Clam Chowder';

  saturday_date = '02/24';

  sunday_date = '02/25';
}

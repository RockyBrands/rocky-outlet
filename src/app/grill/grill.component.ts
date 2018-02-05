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

  monday_date = '02/05';
  monday_main = "General Tso's Chicken";
  monday_sides = "broccoli, white rice, fried rice";
  monday_soup = 'Cream of Broccoli';

  tuesday_date = '02/06';
  tuesday_main = 'Beef Teriyaki Kabobs';
  tuesday_sides = 'mushrooms, onions, peppers, mixed vegetables, macaroni and cheese';
  tuesday_soup = 'Mushroom and Brie Bisque';

  wednesday_date = '02/07';
  wednesday_main = 'Cajun Spaghetti';
  wednesday_sides = 'California Vegetables, garlic bread';
  wednesday_soup = 'White Chicken Chili';

  thursday_date = '02/08';
  thursday_main = 'Chicken and Noodles';
  thursday_sides = 'mashed potatoes, chicken gravy, corn';
  thursday_soup = 'Chicken Gumbo';

  friday_date = '02/09';
  friday_main = 'Burger Bar';
  friday_sides = "baked beans, green beans";
  friday_soup = 'French Onion Soup';

  saturday_date = '02/10';

  sunday_date = '02/11';
}

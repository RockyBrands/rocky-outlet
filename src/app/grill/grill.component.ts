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

  monday_date = '9/18';
  monday_main = 'Pulled Pork';
  monday_sides = 'seasoned fries, slaw';
  monday_soup = 'Beef n Noodle';

  tuesday_date = '9/19';
  tuesday_main = 'Spaghetti & Meatballs';
  tuesday_sides = 'garlic toast, spinach salad';
  tuesday_soup = 'Stuffed Pepper';

  wednesday_date = '9/20';
  wednesday_main = 'Chicken Alfredo';
  wednesday_sides = 'broccoli';
  wednesday_soup = 'Pumpkin Apple and Bacon';

  thursday_date = '9/21';
  thursday_main = 'General Tso Chicken';
  thursday_sides = 'fried rice, egg rolls';
  thursday_soup = 'Broccoli Cheese';

  friday_date = '9/22';
  friday_main = 'Taco Casserole';
  friday_sides = 'corn & black bean fiesta';
  friday_soup = 'White Chicken Chili';

  saturday_date = '9/23';

  sunday_date = '9/24';
}

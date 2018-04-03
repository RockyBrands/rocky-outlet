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

  monday_date = '04/02';
  monday_main = 'Italian Chicken';
  monday_sides = 'asparagus, au gratin potatoes';
  monday_soup = 'Stuffed Pepper Soup';

  tuesday_date = '04/03';
  tuesday_main = 'Spaghetti and Meatballs';
  tuesday_sides = 'spinach salad, garlic toast';
  tuesday_soup = 'Minestrone';

  wednesday_date = '04/04';
  wednesday_main = "General Tso's Chicken";
  wednesday_sides = 'white rice, fried rice, broccoli';
  wednesday_soup = 'Chicken Noodle';

  thursday_date = '04/05';
  thursday_main = 'Country Fried Steak';
  thursday_sides = 'mashed potatoes, gravy, corn';
  thursday_soup = 'Beef Noodle';

  friday_date = '04/06';
  friday_main = 'Pepper Steak';
  friday_sides = 'snow peas, rice';
  friday_soup = 'White Chicken Chili';

  saturday_date = '04/07';

  sunday_date = '04/08';
}

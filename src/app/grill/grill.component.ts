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

  monday_date = '11/27';
  monday_main = 'Beef Stew';
  monday_sides = 'cole slaw, biscuits';
  monday_soup = 'Clam Chowder';

  tuesday_date = '11/28';
  tuesday_main = 'Chicken Dumplings';
  tuesday_sides = 'brussel sprouts, mashed potatoes & gravy';
  tuesday_soup = 'French Onion Soup';

  wednesday_date = '11/29';
  wednesday_main = 'Cabbage Rolls';
  wednesday_sides = 'macaroni & cheese, rolls';
  wednesday_soup = 'White Chicken Chili';

  thursday_date = '11/30';
  thursday_main = 'Chicken Parmesan';
  thursday_sides = 'California vegetables';
  thursday_soup = 'Spinach and Artichoke';

  friday_date = '12/01';
  friday_main = 'Cheese Manicotti';
  friday_sides = 'broccoli, spinach salad, garlic bread';
  friday_soup = 'Cream of Broccoli';

  saturday_date = '12/02';

  sunday_date = '12/03';
}

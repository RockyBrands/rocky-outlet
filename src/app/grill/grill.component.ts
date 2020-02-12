import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from './../animations';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'grill',
  templateUrl: './grill.component.html',
  styleUrls: ['./grill.component.css'],
  animations: [ slideInDownAnimation ],
})
export class GrillComponent {
  constructor(private meta: Meta, private titleService: Title) {
   this.meta.addTag({ name: 'description', content: 'Enjoy a popular bison burger, the daily special, or order off the menu at The Boot Grill. Located inside the Rocky Outlet Store in Nelsonville, Ohio.' });
   this.titleService.setTitle( 'The Boot Grill' );
  }

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.width')  width = '100%';
  title = 'The Boot Grill';
  intro_image = "./assets/images/boot_grill.jpg";

  monday_date = '02/10';
  monday_main = "Free drink with purchase of any sandwich and a side";
 // monday_sides = 'chips, and cole slaw';
  monday_soup = "Chicken Tortilla";

  tuesday_date = '02/11';
  tuesday_main = "$1.00 off any side with purchase of a sandwich";
 // tuesday_sides = "mashed potatoes, gravy, and corn";
  tuesday_soup = 'Italian Wedding';

  wednesday_date = '02/12';
  wednesday_main = "Turkey";
  wednesday_sides = "mashed potatoes, and gravy";
  wednesday_soup = "Minestrone";

  thursday_date = '02/13';
  thursday_main = 'Add fries for $1.00!';
  //thursday_sides = 'au gratin potatoes, and green beans';
  thursday_soup = 'French Onion';

  friday_date = '02/14';
  friday_main = 'Chili Cheese Dog';
  friday_sides = 'with fries, and a drink';
  friday_soup = 'Beef Barley';

  saturday_date = '02/15';

  sunday_date = '02/16';

  burger_name = 'The Mystery Machine';
  burger_pic = './assets/images/mystery-machine.jpg';
  burger_description = "We take two slices of sourdough bread, slather them in butter, and toast them. We add a half pound of chopped steak then smother it with grilled onions, grilled mushrooms, and swiss cheese. Add your favorite side or stick with the delicious salty crunch of Conn's potato chips and it is a meal not soon to be forgotten!";
}
//then we add the 1/3lb. non-GMO burger patty from Symmes Creek Ranch in Patriot Ohio, seasoned with a house blend of spices. We top that tasty boi with bacon, cheddar cheese, our house made Bubba's Kickin' Q sauce, lettuce, tomato, pickle, and onion. Add your favorite side or stick with the delicious salty crunch of Conn’s Potato chips, and it is a meal not soon to be forgotten!

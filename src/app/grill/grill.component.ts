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

  monday_date = '09/23';
  monday_main = "Salmon";
  monday_sides = 'loaded mashed potatoes, and asparagus';
  monday_soup = "Chicken and Wild Rice";

  tuesday_date = '09/24';
  tuesday_main = "Fried Pork Chops";
  tuesday_sides = "au gratin potatoes, and mixed vegetables";
  tuesday_soup = 'Beef Noodle';

  wednesday_date = '09/25';
  wednesday_main = "General Tso's Shrimp";
  wednesday_sides = 'rice, broccoli, and egg rolls';
  wednesday_soup = 'White Chicken Chili';

  thursday_date = '09/26';
  thursday_main = 'Chicken Cavatappi';
  thursday_sides = 'garlic toast, and California vegetables';
  thursday_soup = 'French Onion';

  friday_date = '09/27';
  friday_main = 'BBQ Pulled Chicken';
  friday_sides = 'mac & cheese, and hearty cole slaw';
  friday_soup = 'Broccoli Cheese';

  saturday_date = '09/28';

  sunday_date = '09/29';

  burger_name = 'The Bayou Burger';
  burger_pic = './assets/images/bayou-burger.jpg';
  burger_description = 'We start off with a Sunny Bun, and we add the 1/3lb. non-GMO burger patty from Symmes Creek Ranch in Patriot Ohio, seasoned with cajun seasoning. We top that thing with gouda cheese, onion, pickle, lettuce, and tomato. We serve it up with a side of gator bits, breaded and seasoned with old bay. Consider adding hot sauce to your gator bites to give them back a little of their BITE.';
}
//then we add the 1/3lb. non-GMO burger patty from Symmes Creek Ranch in Patriot Ohio, seasoned with a house blend of spices. We top that tasty boi with bacon, cheddar cheese, our house made Bubba's Kickin' Q sauce, lettuce, tomato, pickle, and onion. Add your favorite side or stick with the delicious salty crunch of Conn’s Potato chips, and it is a meal not soon to be forgotten!

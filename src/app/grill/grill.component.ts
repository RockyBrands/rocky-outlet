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

  monday_date = '09/30';
  monday_main = "Burger Bar";
  monday_sides = 'a fan favorite!';
  monday_soup = "White Chicken Chili";

  tuesday_date = '10/01';
  tuesday_main = "Bourbon Chicken";
  tuesday_sides = "rice, and broccoli";
  tuesday_soup = 'Vegetable Soup';

  wednesday_date = '10/02';
  wednesday_main = "Beef Stroganoff";
  wednesday_sides = 'noodles, mashed potatoes, and corn';
  wednesday_soup = 'Broccoli Cheese';

  thursday_date = '10/03';
  thursday_main = 'Chicken Alfredo';
  thursday_sides = 'garlic toast, and spinach salad';
  thursday_soup = 'Chicken Noodle';

  friday_date = '10/04';
  friday_main = 'Turkey';
  friday_sides = 'mashed potatoes, gravy, and green beans';
  friday_soup = 'Pumpkin & Roasted Apple with Bacon';

  saturday_date = '10/05';

  sunday_date = '10/06';

  burger_name = 'The Chicken Fried';
  burger_pic = './assets/images/chicky-chicky-fry-fry.jpg';
  burger_description = "We start off with a Sunny Bun, and we add the 1/4lb Tyson no antibiotics added, breaded chicken breast patty, topped with pickles. We serve it up with sidewinder fries. It will make you wish you had a cold beer on a Friday night! It will also make your pants fit not quite right, but we don't have to think about that.";
}
//then we add the 1/3lb. non-GMO burger patty from Symmes Creek Ranch in Patriot Ohio, seasoned with a house blend of spices. We top that tasty boi with bacon, cheddar cheese, our house made Bubba's Kickin' Q sauce, lettuce, tomato, pickle, and onion. Add your favorite side or stick with the delicious salty crunch of Conn’s Potato chips, and it is a meal not soon to be forgotten!

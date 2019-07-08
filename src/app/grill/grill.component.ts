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

  monday_date = '07/08';
  monday_main = 'Kielbasa';
  monday_sides = 'roasted red potatoes, and mixed vegetables';
  monday_soup = 'Broccoli Cheese';

  tuesday_date = '07/09';
  tuesday_main = 'Stuffed Crab';
  tuesday_sides = 'macaroni & cheese, and California vegetables';
  tuesday_soup = 'Tomato Tortellini';

  wednesday_date = '07/10';
  wednesday_main = 'Pizza Bar';
  wednesday_sides = 'a fan favorite!';
  wednesday_soup = 'Beef Barley';

  thursday_date = '07/11';
  thursday_main = 'Bourbon Chicken';
  thursday_sides = 'white rice, and broccoli';
  thursday_soup = 'French Onion';

  friday_date = '07/12';
  friday_main = 'Burger Bar';
  friday_sides = 'lattice chips, and baked beans';
  friday_soup = 'Minestrone';

  saturday_date = '07/13';

  sunday_date = '07/14';

  burger_name = 'The Italian';
  burger_pic = './assets/images/the-italian.jpg';
  burger_description = 'We start off with an 8" sub bun topped with butter and parmesan cheese. Then we add 6 slices of salami, 6 slices of pepperoni, and 4 ounces of ham. Then we top that refluxer with provolone cheese and toast it. Served with a side of spicy Italian dressing that you will not want to pass on. Add your favorite side or stick with the delicious salty crunch of Conn’s Potato chips, and it is a meal not soon to be forgotten!';
}
//then we add the 1/3lb. non-GMO burger patty from Symmes Creek Ranch in Patriot Ohio, seasoned with a house blend of spices. We top that tasty boi with bacon, cheddar cheese, our house made Bubba's Kickin' Q sauce, lettuce, tomato, pickle, and onion. Add your favorite side or stick with the delicious salty crunch of Conn’s Potato chips, and it is a meal not soon to be forgotten!

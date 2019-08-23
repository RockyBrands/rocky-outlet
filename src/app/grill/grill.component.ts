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

  monday_date = '08/19';
  monday_main = "Steak";
  monday_sides = 'mashed potatoes, gravy, and green beans';
  monday_soup = "Chicken Noodle";

  tuesday_date = '08/20';
  tuesday_main = "Enchiladas";
  tuesday_sides = "broccoli, yellow squash, carrots, and Mexican rice";
  tuesday_soup = 'Gumbolaya';

  wednesday_date = '08/21';
  wednesday_main = 'Catfish';
  wednesday_sides = 'mac & cheese, and hearty cole slaw';
  wednesday_soup = 'Tomato Zucchini';

  thursday_date = '08/22';
  thursday_main = 'Chicken Mushroom Marinara';
  thursday_sides = 'seasoned mixed vegetables, and garlic toast';
  thursday_soup = 'Potato Chophouse';

  friday_date = '08/23';
  friday_main = 'BBQ Ribs';
  friday_sides = 'baked beans, and mac & cheese';
  friday_soup = 'Chicken Pot Pie';

  saturday_date = '08/24';

  sunday_date = '08/25';

  burger_name = 'The Rocky Burger';
  burger_pic = './assets/images/rocky_burger.png';
  burger_description = 'We start off with a brioche bun, then we add the 1/3lb. non-GMO burger patty from Symmes Creek Ranch in Patriot Ohio, seasoned with salt and pepper. Then we top that with cheddar cheese, bacon, an egg (cooked however you would like it), lettuce, tomato, and grilled onions. Add your favorite side or stick with the delicious salty crunch of Conn’s Potato chips, and it is a meal not soon to be forgotten!';
}
//then we add the 1/3lb. non-GMO burger patty from Symmes Creek Ranch in Patriot Ohio, seasoned with a house blend of spices. We top that tasty boi with bacon, cheddar cheese, our house made Bubba's Kickin' Q sauce, lettuce, tomato, pickle, and onion. Add your favorite side or stick with the delicious salty crunch of Conn’s Potato chips, and it is a meal not soon to be forgotten!

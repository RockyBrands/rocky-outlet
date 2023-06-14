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
   this.meta.addTag({ name: 'description', content: 'Enjoy a popular bison burger, the daily special, or order off the menu at The Boot Grill. Located inside the Rocky Outdoor Gear Store in Nelsonville, Ohio.' });
   this.titleService.setTitle( 'The Boot Grill' );
  }

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.width')  width = '100%';
  title = 'The Boot Grill';
  intro_image = "./assets/images/boot_grill.jpg";

  monday_date = '12/21';
  monday_main = "Bang Bang Shrimp";
  monday_sides = "with sidewinder fries";
  monday_soup = "White Chicken Chili";
  // monday_main_too = "Turkey";
  // monday_sides_too = "with mashed potatoes, gravy, and green beans";

  tuesday_date = '12/22';
  tuesday_main = "Beef Stew";
  tuesday_sides = "with biscuits";
  tuesday_soup = 'Beef Barley';
  //tuesday_main_too = "BLT on Wheat";
  //tuesday_sides_too = "with sun chips";

  wednesday_date = '12/23';
  wednesday_main = 'Ribeye Steak';
  wednesday_sides = "with baked potato, and peas 'n carrots";
  wednesday_soup = "Potato Chophouse";
  //wednesday_main_too = "Bang Bang Shrimp";
  //wednesday_sides_too = "with cole slaw";

  thursday_date = '12/24';
  thursday_main = 'Free Hotdog Day!!!';
  thursday_sides = '2 per customer, while supplies last';
  thursday_soup = 'Chicken Tortilla';
  //thursday_main_too = "Meatloaf";
  //thursday_sides_too = "with mashed potatoes, and corn";

  friday_date = '12/25';
  friday_main = 'Closed';
  friday_sides = 'MERRY CHRISTMAS!!';
  friday_soup = 'Minestrone';
  //friday_main_too = "Lasagna";
  //friday_sides_too = "with garlic toast";

  saturday_date = '12/26';
  saturday_main_too = "10 Traditional Wings";
  saturday_sides_too = '';
  //saturday_main_too = "1/2lb Boneless Wings";
  //saturday_sides_too = "with tater tots";

  sunday_date = '12/27';
  sunday_main = 'CLOSED';
  sunday_sides = 'Until further notice';

  burger_name = 'The Chicken Cordon Bleu Melt';
  burger_pic = './assets/images/ccbleumelt.jpg';
  burger_description = "We start off with two slices of toasted sourdough, then we add swiss cheese, grilled chicken, and ham, topped with lettuce and tomato. Add your favorite side or stick with the delicious salty crunch of Conn's potato chips and it is a meal not soon to be forgotten!";
}
//then we add the 1/3lb. non-GMO burger patty from Symmes Creek Ranch in Patriot Ohio, seasoned with a house blend of spices. We top that tasty boi with bacon, cheddar cheese, our house made Bubba's Kickin' Q sauce, lettuce, tomato, pickle, and onion. Add your favorite side or stick with the delicious salty crunch of Conn’s Potato chips, and it is a meal not soon to be forgotten!

import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from './../../animations';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'sandwiches',
  templateUrl: './sandwiches.component.html',
  styleUrls: ['./sandwiches.component.css'],
  animations: [ slideInDownAnimation ],
})
export class SandwichesComponent {
  constructor(private meta: Meta, private titleService: Title) {
   this.meta.addTag({ name: 'description', content: 'Enjoy a popular bison burger, the daily special, or order off the menu at The Boot Grill. Located inside the Rocky Outdoor Gear Store in Nelsonville, Ohio.' });
   this.titleService.setTitle( 'The Boot Grill TV Menu' );
  }

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.width')  width = '100%';

  monday_date = '08/27';
  monday_main = 'Pizza Burgers';
  monday_sides = 'pasta salad, green beans';
  monday_soup = 'Minestrone';

  tuesday_date = '08/28';
  tuesday_main = 'Cabbage Rolls';
  tuesday_sides = 'mashed potatoes, corn';
  tuesday_soup = 'Vegetable';

  wednesday_date = '08/29';
  wednesday_main = 'Italian Chicken';
  wednesday_sides = 'California vegetables, au gratin potatoes';
  wednesday_soup = 'Potato & Cheese';

  thursday_date = '08/30';
  thursday_main = 'Chicken & Mushroom Marinara';
  thursday_sides = 'spinach salad, garlic toast';
  thursday_soup = 'Italian Wedding';

  friday_date = '08/31';
  friday_main = 'Grouper';
  friday_sides = 'macaroni & cheese, cole slaw';
  friday_soup = 'Broccoli Cheese';

  saturday_date = '09/01';

  sunday_date = '09/02';

  burger_name = 'The Teriyaki Swiss Burger';
  burger_pic = './assets/images/teriyaki_burger.jpg';
  burger_description = "We start off with 2 slices of buttered, grilled sourdough bread. Then we add in the 1/3lb non-GMO burger patty (Prepare to order*) from Symmes Creek Ranch in Patriot, Ohio. Lightly seasoned with garlic salt, topped with teriyaki sauce, swiss cheese, pickle, lettuce, tomato, and onion. Add your favorite side or stick with the delicious salty crunch of Conn’s potato chips and it is a meal not soon to be forgotten!";
}

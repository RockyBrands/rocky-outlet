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

  monday_date = '10/09';
  monday_main = 'Pizza Bar';
  monday_sides = 'Pepperoni, Pepperoni and Mushroom, Meat Lovers, Buffalo';
  monday_soup = 'Homemade Pizza Soup';

  tuesday_date = '10/10';
  tuesday_main = 'Bread Bowl / Soup Bar';
  tuesday_sides = 'Cheddar Broccoli, Minestrone, Chicken Noodle, Vegetable';
  tuesday_soup = 'Chicken Gumbo';

  wednesday_date = '10/11';
  wednesday_main = 'Wing Wednesday';
  wednesday_sides = 'celery & carrots with ranch, steamed broccoli';
  wednesday_soup = 'Cheeseburger Chowder';

  thursday_date = '10/12';
  thursday_main = 'Create A Slider';
  thursday_sides = 'chips, various meats and toppings';
  thursday_soup = 'Spinach & Artichoke';

  friday_date = '10/13';
  friday_main = 'Breakfast for Lunch';
  friday_sides = 'scrambled eggs, French toast, sausage, pancakes';
  friday_soup = 'Vegan Minestrone';

  saturday_date = '10/14';

  sunday_date = '10/15';
}

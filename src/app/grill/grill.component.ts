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

  monday_date = '02/26';
  monday_main = 'Boneless Wing Bar';
  monday_sides = 'several sauces, celery, green beans';
  monday_soup = 'Greek Lemon Chicken';

  tuesday_date = '02/27';
  tuesday_main = 'Roast Beef';
  tuesday_sides = 'mashed potatoes, gravy, bread, corn';
  tuesday_soup = 'Vegetarian Black Bean';

  wednesday_date = '02/28';
  wednesday_main = 'Turkey Cheddar Wraps';
  wednesday_sides = 'brussels sprouts, chips';
  wednesday_soup = 'Cream of Potato with Bacon';

  thursday_date = '03/01';
  thursday_main = 'Chicken, Bacon, Ranch';
  thursday_sides = 'au gratin potatoes, asparagus';
  thursday_soup = 'Smoky Poblano & Cheese';

  friday_date = '03/02';
  friday_main = 'Shrimp Bar';
  friday_sides = 'alfredo and shrimp scampi, California vegetables';
  friday_soup = 'Shrimp and Corn Chowder';

  saturday_date = '03/03';

  sunday_date = '03/04';
}

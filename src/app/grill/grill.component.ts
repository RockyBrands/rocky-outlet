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

  monday_date = '02/12';
  monday_main = 'Spicy Chicken Breast';
  monday_sides = 'macaroni and cheese, broccoli';
  monday_soup = 'Chicken Noodle';

  tuesday_date = '02/13';
  tuesday_main = 'Loaded Nachos';
  tuesday_sides = 'pulled pork, taco meat, several toppings';
  tuesday_soup = 'Vegetable';

  wednesday_date = '02/14';
  wednesday_main = 'Chicken Cavatappi';
  wednesday_sides = 'California vegetables, roasted potatoes';
  wednesday_soup = 'Minestrone';

  thursday_date = '02/15';
  thursday_main = 'Chicken and Dumplings';
  thursday_sides = 'mashed potatoes, corn';
  thursday_soup = 'Broccoli Cheese';

  friday_date = '02/16';
  friday_main = 'Yuengling Battered Cod';
  friday_sides = 'macaroni and cheese, chips, cole slaw';
  friday_soup = 'Lobster Bisque';

  saturday_date = '02/17';

  sunday_date = '02/18';
}

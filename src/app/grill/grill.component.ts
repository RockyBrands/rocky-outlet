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

  monday_date = '10/30';
  monday_main = 'Wraps Bar';
  monday_sides = 'Italian or Turkey Cheddar, chips, pasta salad';
  monday_soup = 'Tuscan Potato Soup';

  tuesday_date = '10/31';
  tuesday_main = 'Spooky Special';
  tuesday_sides = 'bat wings, skeleton bones, cemetery dirt pudding';
  tuesday_soup = 'Apple, Pumpkin, and Bacon';

  wednesday_date = '11/01';
  wednesday_main = 'Lasagna';
  wednesday_sides = 'breadsticks, spinach salad';
  wednesday_soup = 'Minestrone';

  thursday_date = '11/02';
  thursday_main = 'American Cookout';
  thursday_sides = 'corn on the cob, hamburgers, mini corn dogs';
  thursday_soup = 'French Onion Soup';

  friday_date = '11/03';
  friday_main = 'Fish Bar';
  friday_sides = 'macaroni and cheese, cole slaw';
  friday_soup = 'Clam Chowder';

  saturday_date = '11/04';

  sunday_date = '11/05';
}

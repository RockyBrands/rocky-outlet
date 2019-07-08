import { Component, HostBinding, Output } from '@angular/core';
import { slideInDownAnimation } from './../../animations';

@Component({
  selector: 'lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.css'],
  animations: [ slideInDownAnimation ],
})
export class LunchComponent {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.width')  width = '100%';

  monday_date = '08/27';
  monday_main = 'Pizza Burgers';
  monday_sides = 'pasta salad, and green beans';
  monday_soup = 'Minestrone';

  tuesday_date = '08/28';
  tuesday_main = 'Cabbage Rolls';
  tuesday_sides = 'mashed potatoes, and corn';
  tuesday_soup = 'Vegetable';

  wednesday_date = '08/29';
  wednesday_main = 'Italian Chicken';
  wednesday_sides = 'California vegetables, and au gratin potatoes';
  wednesday_soup = 'Potato & Cheese';

  thursday_date = '08/30';
  thursday_main = 'Chicken & Mushroom Marinara';
  thursday_sides = 'spinach salad, and garlic toast';
  thursday_soup = 'Italian Wedding';

  friday_date = '08/31';
  friday_main = 'Grouper';
  friday_sides = 'macaroni & cheese, and cole slaw';
  friday_soup = 'Broccoli Cheese';

  saturday_date = '09/01';

  sunday_date = '09/02';

}

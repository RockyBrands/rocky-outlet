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

  monday_date = '10/02';
  monday_main = 'Smothered Pork Chops';
  monday_sides = 'mashed potatoes, pork gravy, california vegetables, biscuit';
  monday_soup = 'Chicken Noodle';

  tuesday_date = '10/03';
  tuesday_main = 'Pasta Bar';
  tuesday_sides = 'spinach salad, garlic toast';
  tuesday_soup = 'Vegetable Beef';

  wednesday_date = '10/04';
  wednesday_main = 'Cabbage Rolls';
  wednesday_sides = 'mashed potatoes, green beans, rolls';
  wednesday_soup = 'Mushroom Brie';

  thursday_date = '10/05';
  thursday_main = 'BBQ Ribs';
  thursday_sides = 'au gratin potatoes, brussel sprouts';
  thursday_soup = 'White Chicken Chili';

  friday_date = '10/06';
  friday_main = 'Sloppy Jo';
  friday_sides = 'macaroni & cheese, buttered peas';
  friday_soup = 'Beef Barley';

  saturday_date = '10/07';

  sunday_date = '10/08';
}

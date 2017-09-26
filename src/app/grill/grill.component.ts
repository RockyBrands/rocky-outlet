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

  monday_date = '9/25';
  monday_main = 'Hot Dog Bar';
  monday_sides = 'baked beans, macaroni salad';
  monday_soup = 'Chimichuri with Steak';

  tuesday_date = '9/26';
  tuesday_main = 'Country Fried Steak';
  tuesday_sides = 'mashed potatoes, gravy, corn';
  tuesday_soup = 'Cream of Chicken with Wild Rice';

  wednesday_date = '9/27';
  wednesday_main = 'Italian Wraps';
  wednesday_sides = 'pasta salad, fried pickles';
  wednesday_soup = 'Baja Chicken Enchilada';

  thursday_date = '9/28';
  thursday_main = '3 Choices of Breaded Shrimp';
  thursday_sides = 'hushpuppies, slaw';
  thursday_soup = 'Stuffed Pepper';

  friday_date = '9/29';
  friday_main = 'Chicken with Spinach Artichoke';
  friday_sides = 'mashed potatoes, gravy, California vegetables';
  friday_soup = 'Tuscan Bean with Sausage';

  saturday_date = '9/30';

  sunday_date = '10/1';
}

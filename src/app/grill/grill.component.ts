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

  monday_date = '05/07';
  monday_main = 'Burger Bar';
  monday_sides = 'macaroni & cheese, baked beans';
  monday_soup = 'Minestrone';

  tuesday_date = '05/08';
  tuesday_main = 'Baked Potato Bar';
  tuesday_sides = 'broccoli';
  tuesday_soup = 'Chicken and Dumpling';

  wednesday_date = '05/09';
  wednesday_main = 'Lasagna';
  wednesday_sides = 'spinach salad, California vegetables, garlic toast';
  wednesday_soup = 'Tomato Bisque';

  thursday_date = '05/10';
  thursday_main = 'Salisbury Steak';
  thursday_sides = 'mashed potatoes, gravy, corn';
  thursday_soup = 'Cream of Potato';

  friday_date = '05/11';
  friday_main = "General Tso's Chicken";
  friday_sides = "broccoli, white rice, fried rice";
  friday_soup = 'Tomato Tortellini';

  saturday_date = '05/12';

  sunday_date = '05/13';
}

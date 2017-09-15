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
  monday_date = '7/31';
  monday_main = 'Fried Chicken';
  monday_sides = 'mashed potatoes & gravy, corn, rolls';
  tuesday_date = '8/1';
  tuesday_main = 'Big Bobs Fish';
  tuesday_sides = 'potatoes au gratin, mixed vegetables, lemon wedges';
  wednesday_date = '8/2';
  wednesday_main = 'Turkey Wraps';
  wednesday_sides = 'baked beans, glazed carrots';
  thursday_date = '8/3';
  thursday_main = 'Pork Chops Sauerkraut';
  thursday_sides = 'roasted potatoes, california blend';
  friday_date = '8/4';
  friday_main = 'Sweet & Sour Chicken';
  friday_sides = 'rice, egg rolls';
  saturday_date = '8/5';
  sunday_date = '8/6';
}

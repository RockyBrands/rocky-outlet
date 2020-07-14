import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from './../../animations';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'burger',
  templateUrl: './burger.component.html',
  styleUrls: ['./burger.component.css'],
  animations: [ slideInDownAnimation ],
})
export class BurgerComponent {
  constructor(private meta: Meta, private titleService: Title) {
   this.meta.addTag({ name: 'description', content: 'Enjoy a popular bison burger, the daily special, or order off the menu at The Boot Grill. Located inside the Rocky Outdoor Gear Store in Nelsonville, Ohio.' });
   this.titleService.setTitle( 'The Boot Grill TV Menu' );
  }

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.width')  width = '100%';

  burger_name = 'The Teriyaki Swiss Burger';
  burger_pic = './assets/images/teriyaki_burger.jpg';
  burger_description = "We start off with 2 slices of buttered, grilled sourdough bread. Then we add in the 1/3lb non-GMO burger patty (Prepare to order*) from Symmes Creek Ranch in Patriot, Ohio. Lightly seasoned with garlic salt, topped with teriyaki sauce, swiss cheese, pickle, lettuce, tomato, and onion. Add your favorite side or stick with the delicious salty crunch of Conn’s potato chips and it is a meal not soon to be forgotten!";
}

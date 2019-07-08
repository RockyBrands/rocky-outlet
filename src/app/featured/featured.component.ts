import { Component, HostBinding } from '@angular/core';
import { slideInDownAnimation } from './../animations';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.css'],
  animations: [ slideInDownAnimation ],
})
export class FeaturedComponent {
  constructor(private meta: Meta, private titleService: Title) {
   this.meta.addTag({ name: 'description', content: 'Find the best featured door busters currently being offered at the Rocky Outlet.' });
   this.titleService.setTitle( 'Featured Product' );
  }

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.width')  width = '100%';
  title = 'Featured Product';
  sale_info = "Don't miss the Rocky Ranger for only $99.99! Wow, what a deal... Would you just look at it?";
  intro_image = "./assets/images/rks0304_featured.jpg";
}

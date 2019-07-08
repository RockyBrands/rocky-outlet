import { Component, HostBinding, OnInit, Input } from '@angular/core';
import { slideInDownAnimation } from './../animations';
import { Meta, Title } from '@angular/platform-browser';

import { TvService } from './tv.service';
import { TvServiceTwo } from './tv-two.service';
import { TvItem }      from './tv-item';
import { TvItemTwo }      from './tv-item-two';
import { NavbarService } from './../navbar/navbar.service';

import { LunchComponent } from './lunch/lunch.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { BurgerComponent } from './burger/burger.component';
import { BurgersComponent } from './burgers/burgers.component';
import { DessertsComponent } from './desserts/desserts.component';
import { DinnerComponent } from './dinner/dinner.component';
import { DrinksComponent } from './drinks/drinks.component';
import { HealthyComponent } from './healthy/healthy.component';
import { KidsComponent } from './kids/kids.component';
import { SandwichesComponent } from './sandwiches/sandwiches.component';
import { SidesComponent } from './sides/sides.component';



@Component({
  selector: 'tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.css'],
  animations: [ slideInDownAnimation ],
})
export class TvComponent implements OnInit {

  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  @HostBinding('style.width')  width = '100%';

  pics: TvItem[];
  picsTwo: TvItemTwo[];

  constructor( public nav: NavbarService, private TvService: TvService, private TvServiceTwo: TvServiceTwo ) {}

  ngOnInit() {
    this.pics = this.TvService.getPics();
    this.picsTwo = this.TvServiceTwo.getPicsTwo();
    this.nav.hide();
  }


}

import { BrowserModule, Title }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { NavbarService } from './navbar/navbar.service';
import { EmailService } from './email.service';

import { AppComponent }     from './app.component';
import { NavbarComponent }  from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { GrillComponent } from './grill/grill.component';
import { FeaturedComponent } from './featured/featured.component';
import { ReturnComponent } from './return/return.component';
import { FooterComponent }  from './footer/footer.component';
import { GrillFooterComponent }  from './grill-footer/footer.component';
import { FormComponent }  from './form/form.component';
import { EventsComponent }  from './events/events.component';
import { NewsletterComponent } from './newsletter/newsletter.component'

import { FourOhFourComponent }  from './fourohfour/fourohfour.component';
import { TvComponent }  from './tv/tv.component';
import { TvDirective }          from './tv/tv.directive';
import { TvService }            from './tv/tv.service';
import { TvPicComponent }            from './tv/tv-pic.component';
import { TvBannerComponent }            from './tv/tv-banner.component';
import { TvDirectiveTwo }          from './tv/tv-two.directive';
import { TvServiceTwo }            from './tv/tv-two.service';
import { TvPicTwoComponent }            from './tv/tv-pic-two.component';
import { TvBannerTwoComponent }            from './tv/tv-banner-two.component';

import { LunchComponent } from './tv/lunch/lunch.component';
import { BreakfastComponent } from './tv/breakfast/breakfast.component';
import { BurgerComponent } from './tv/burger/burger.component';
import { BurgersComponent } from './tv/burgers/burgers.component';
import { DessertsComponent } from './tv/desserts/desserts.component';
import { DinnerComponent } from './tv/dinner/dinner.component';
import { DrinksComponent } from './tv/drinks/drinks.component';
import { HealthyComponent } from './tv/healthy/healthy.component';
import { KidsComponent } from './tv/kids/kids.component';
import { SandwichesComponent } from './tv/sandwiches/sandwiches.component';
import { SidesComponent } from './tv/sides/sides.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ProductsComponent,
    AttractionsComponent,
    GrillComponent,
    FeaturedComponent,
    ReturnComponent,
    FooterComponent,
    GrillFooterComponent,
    FourOhFourComponent,
    TvComponent,
    TvDirective,
    TvPicComponent,
    TvBannerComponent,
    TvDirectiveTwo,
    TvPicTwoComponent,
    TvBannerTwoComponent,
    LunchComponent,
    BreakfastComponent,
    BurgerComponent,
    BurgersComponent,
    DessertsComponent,
    DinnerComponent,
    DrinksComponent,
    HealthyComponent,
    KidsComponent,
    SandwichesComponent,
    SidesComponent,
    FormComponent,
    EventsComponent,
    NewsletterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [
    Title,
    TvService,
    TvServiceTwo,
    NavbarService,
    EmailService
  ],
  entryComponents: [
    TvPicComponent,
    TvPicTwoComponent
  ],
  bootstrap: [
    AppComponent,
    NavbarComponent,
  ]
})
export class AppModule {
  constructor() {}
}

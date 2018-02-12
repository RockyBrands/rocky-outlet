import { BrowserModule }    from '@angular/platform-browser';
import { NgModule }         from '@angular/core';
import { AlertModule } from 'ngx-bootstrap';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent }     from './app.component';
import { NavbarComponent }  from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AttractionsComponent } from './attractions/attractions.component';
import { GrillComponent } from './grill/grill.component';
import { FeaturedComponent } from './featured/featured.component';
import { ReturnComponent } from './return/return.component';
import { FooterComponent }  from './footer/footer.component';
import { FourOhFourComponent }  from './fourohfour/fourohfour.component';

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
    FourOhFourComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent,
    NavbarComponent,
  ]
})
export class AppModule { }

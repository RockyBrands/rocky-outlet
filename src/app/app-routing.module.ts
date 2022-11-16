import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { AttractionsComponent }    from './attractions/attractions.component';
// import { GrillComponent } from './grill/grill.component';
import { FeaturedComponent } from './featured/featured.component';
import { ReturnComponent } from './return/return.component';
import { FourOhFourComponent }  from './fourohfour/fourohfour.component';
import { TvComponent }  from './tv/tv.component';
import { EventsComponent }  from './events/events.component';
import { NewsletterComponent } from './newsletter/newsletter.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'attractions', component: AttractionsComponent },
  // { path: 'grill', component: GrillComponent },
  { path: 'featured', component: FeaturedComponent },
  { path: 'return', component: ReturnComponent },
  { path: 'tv', component: TvComponent },
  { path: 'events', component: EventsComponent },
  { path: 'newsletter', component: NewsletterComponent },
  { path: '**', component: FourOhFourComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

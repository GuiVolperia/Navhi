import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProductsComponent } from './pages/products/products.component';
import { EventsComponent } from './pages/events/events.component';
import { ProhibitedContentComponent } from './pages/prohibited-content/prohibited-content.component';
import { KitsComponent } from './pages/kits/kits.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: AboutUsComponent },
  { path: 'contato', component: ContactUsComponent },
  { path: 'cervejas', component: ProductsComponent },
  { path: 'kits', component: KitsComponent },
  { path: 'eventos', component: EventsComponent },
  { path: 'menor-idade', component: ProhibitedContentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { ProductsComponent } from './pages/products/products.component';
import { EventsComponent } from './pages/events/events.component';
import { ProhibitedContentComponent } from './pages/prohibited-content/prohibited-content.component';
import { KitsComponent } from './pages/kits/kits.component';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { BudgetsComponent } from './pages/budgets/budgets.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'sobre', component: AboutUsComponent },
  { path: 'contato', component: ContactUsComponent },
  { path: 'cervejas', component: ProductsComponent },
  { path: 'kits', component: KitsComponent },
  { path: 'eventos', component: EventsComponent },
  { path: 'orcamentos', component: BudgetsComponent },
  { path: 'menor-idade', component: ProhibitedContentComponent },


  // Rotas do Admin
  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })
  ],
  exports: [RouterModule],
  providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }]
})
export class AppRoutingModule { }

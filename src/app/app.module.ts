import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { HomeComponent } from './pages/home/home.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './pages/products/products.component';
import { EventsComponent } from './pages/events/events.component';
import { Subscription } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';

import { ProhibitedContentComponent } from './pages/prohibited-content/prohibited-content.component';
import { AgeVerificationComponent } from './pages/age-verification/age-verification.component';
import { KitsComponent } from './pages/kits/kits.component';
import { BudgetsComponent } from './pages/budgets/budgets.component';



@NgModule({
  declarations: [
    AppComponent,
     AboutUsComponent,
     HomeComponent,
     ContactUsComponent,
     ProductsComponent,
     EventsComponent,
     AgeVerificationComponent,
     ProhibitedContentComponent,
     KitsComponent,
     BudgetsComponent,     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

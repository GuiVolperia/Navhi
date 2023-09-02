import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './products/products.component';
import { EventsComponent } from './events/events.component';
import { Subscription } from 'rxjs';



@NgModule({
  declarations: [
    AppComponent,
     AboutUsComponent,
     HomeComponent,
     ContactUsComponent,
     ProductsComponent,
     EventsComponent,     
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { HeaderComponent } from './views/header/header.component';
import { ContactComponent } from './views/contact/contact.component';
import { AboutComponent } from './views/about/about.component';
import { CardComponent } from './views/common/card/card.component';
import { MatModule } from './material.module';
import { LandingComponent } from './views/landing/landing.component';
import { TestimonialsComponent } from './views/testimonials/testimonials.component';
import { ContactCardComponent } from './views/common/contact-card/contact-card.component';
import { ClientsComponent } from './views/clients/clients.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    ContactComponent,
    AboutComponent,
    CardComponent,
    LandingComponent,
    TestimonialsComponent,
    ContactCardComponent,
    ClientsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

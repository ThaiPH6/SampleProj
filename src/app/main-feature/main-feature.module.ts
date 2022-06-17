import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainFeatureRoutingModule } from './main-feature-routing.module';
import { BookingComponent } from './booking/booking.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';


@NgModule({
  declarations: [
    BookingComponent,
    ListContactComponent,
    WelcomePageComponent
  ],
  imports: [
    CommonModule,
    MainFeatureRoutingModule
  ]
})
export class MainFeatureModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { ListContactComponent } from './list-contact/list-contact.component';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';

const routes: Routes = [
  { path: 'booking', component: BookingComponent},
  { path: 'home', component: WelcomePageComponent},
  { path: 'contract', component: ListContactComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainFeatureRoutingModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { SignupComponent } from './auth/signup/signup.component';
import { LoginComponent } from './auth/login/login.component';
import { TrainingComponent } from './training/training.component';
import { CurrentTrainComponent } from './training/current-train/current-train.component';
import { NewTrainComponent } from './training/new-train/new-train.component';
import { PastTrainComponent } from './training/past-train/past-train.component';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { MainHeaderComponent } from './layouts/main-header/main-header.component';
import { MainSidebarComponent } from './layouts/main-sidebar/main-sidebar.component';
import { MainFooterComponent } from './layouts/main-footer/main-footer.component';
import { ControlSidebarComponent } from './layouts/control-sidebar/control-sidebar.component';
import { ContentWrapperComponent } from './layouts/content-wrapper/content-wrapper.component';
import { MainFeatureModule } from './main-feature/main-feature.module';
import { AuthService } from './auth/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    TrainingComponent,
    CurrentTrainComponent,
    NewTrainComponent,
    PastTrainComponent,
    HomepageComponent,
    MainHeaderComponent,
    MainSidebarComponent,
    MainFooterComponent,
    ControlSidebarComponent,
    ContentWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    MainFeatureModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }

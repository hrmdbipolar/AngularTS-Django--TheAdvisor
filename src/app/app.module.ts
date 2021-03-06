import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeViewComponent } from './home-view/home-view.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { StartViewComponent } from './start-view/start-view.component';
import { LoginViewComponent } from './login-view/login-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeViewComponent,
    UserProfileComponent,
    StartViewComponent,
    LoginViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

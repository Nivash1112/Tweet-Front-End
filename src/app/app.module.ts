import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { LoginPageComponent } from './login-registration-container/login-page/login-page.component';
import { RegistrationPageComponent } from './login-registration-container/registration-page/registration-page.component';
import { UserSideBarComponent } from './user-activity-container/user-nav-bar/user-side-bar.component';
import { ShowTweetsPageComponent } from './user-activity-container/show-tweets-page/show-tweets-page.component';
import { PostTweetsPageComponent } from './user-activity-container/post-tweets-page/post-tweets-page.component';
import { ViewUsersPageComponent } from './user-activity-container/view-users-page/view-users-page.component';
import { ViewUsersTweetsComponent } from './user-activity-container/view-users-tweets/view-users-tweets.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ForgotPasswordComponent  } from './login-registration-container/forgot-password/forgot-password.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import {MatIconModule} from '@angular/material/icon';
import { UserTweetPageComponent } from './user-activity-container/user-tweet-page/user-tweet-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    RegistrationPageComponent,
    ShowTweetsPageComponent,
    PostTweetsPageComponent,
    UserSideBarComponent,
    ViewUsersPageComponent,
    ViewUsersTweetsComponent,
    ForgotPasswordComponent,
    ErrorPageComponent,
    UserTweetPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

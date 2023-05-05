import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { CuisineCarouselComponent } from './components/cuisine-carousel/cuisine-carousel.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatRadioModule} from '@angular/material/radio';
import { CardsComponent } from './components/cards/cards.component';
import { PaymentComponent } from './components/payment/payment.component';
import { CartComponent } from './components/cart/cart.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { UserLoginHeaderComponent } from './components/user-login-header/user-login-header.component';
import { UserLoginDashboardComponent } from './components/user-login-dashboard/user-login-dashboard.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { RestaurantSignupComponent } from './components/restaurant-signup/restaurant-signup.component'; 
import { RestaurantLoginComponent } from './components/restaurant-login/restaurant-login.component'; 
import { RestaurantDashboardComponent } from './components/restaurant-dashboard/restaurant-dashboard.component';
import { HttpClientModule } from '@angular/common/http';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';
import { AddDishesComponent } from './components/add-dishes/add-dishes.component';
import { UploadUserImageComponent } from './components/upload-user-image/upload-user-image.component';
import { RestaurantHeaderComponent } from './components/restaurant-header/restaurant-header.component';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { ThanksComponent } from './components/thanks/thanks.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    FooterComponent,
    CuisineCarouselComponent,
    PageNotFoundComponent,
    CardsComponent,
    PaymentComponent,
    CartComponent,
    FavouriteComponent,
    UserLoginHeaderComponent,
    UserLoginDashboardComponent,
    ForgetPasswordComponent,
    RestaurantSignupComponent,
    RestaurantLoginComponent,
    RestaurantDashboardComponent,
    AddRestaurantComponent,
    AddDishesComponent,
    UploadUserImageComponent,
    RestaurantHeaderComponent,
    ThanksComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatToolbarModule,MatIconModule,MatTabsModule,MatButtonModule,MatInputModule,MatSelectModule,
    FormsModule,MatCardModule,ReactiveFormsModule,MatRadioModule,HttpClientModule,MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { UserLoginDashboardComponent } from './components/user-login-dashboard/user-login-dashboard.component';
import { UserLoginHeaderComponent } from './components/user-login-header/user-login-header.component';
import { RestaurantLoginComponent } from './components/restaurant-login/restaurant-login.component';
import { RestaurantSignupComponent } from './components/restaurant-signup/restaurant-signup.component';
import { RestaurantDashboardComponent } from './components/restaurant-dashboard/restaurant-dashboard.component';
import { CartComponent } from './components/cart/cart.component';
import { FavouriteComponent } from './components/favourite/favourite.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { PaymentComponent } from './components/payment/payment.component';
import { AddDishesComponent } from './components/add-dishes/add-dishes.component';
import { AddRestaurantComponent } from './components/add-restaurant/add-restaurant.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'userLogin',component:LoginComponent},
  {path:'register',component:SignupComponent},
  {path:'userDashboard',component:UserLoginDashboardComponent},
  {path:'userHeader',component:UserLoginHeaderComponent},
  {path:'restaurantLogin',component:RestaurantLoginComponent},
  {path:'restaurantRegister',component:RestaurantSignupComponent},
  {path:'restaurantDashboard',component:RestaurantDashboardComponent},
  {path:'cart',component:CartComponent},
  {path:'favourite',component:FavouriteComponent},
  {path:'payment',component:PaymentComponent},
  {path:'addDish',component:AddDishesComponent},
  {path:'addRestaurant',component:AddRestaurantComponent},
  {path:'forgetPassword',component:ForgetPasswordComponent},
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'**',component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

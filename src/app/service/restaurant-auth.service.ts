import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantSignUp } from '../model/restaurant/restaurant-sign-up';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantAuthService {

  isLoggedIn:boolean = false;

  constructor(private httpClient:HttpClient) { }

  resAuthUrl = "http://localhost:8081/owner-auth";

  restaurantOwnerRegistration(restaurantSignUp:RestaurantSignUp)
  {
    console.log(restaurantSignUp);
    return this.httpClient.post(this.resAuthUrl+"/sign-in/",restaurantSignUp)
  }


  restaurantOwnerLogin(RestaurantOwner:any)
  {
    return this.httpClient.post(this.resAuthUrl+"/login/",RestaurantOwner)
  }

  loggedIn(){
    this.isLoggedIn = true;
  }

}

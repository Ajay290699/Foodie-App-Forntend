import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RestaurantSignUp } from '../model/restaurant/restaurant-sign-up';

@Injectable({
  providedIn: 'root'
})
export class RestaurantAuthService {

  constructor(private httpClient:HttpClient) { }

  resAuthUrl = "http://localhost:6000/owner-auth";

  restaurantOwnerRegistration(restaurantSignUp:RestaurantSignUp)
  {
    return this.httpClient.post(this.resAuthUrl+"/sign-in/",restaurantSignUp)
  }


  restaurantOwnerLogin(RestaurantOwner:any)
  {
    return this.httpClient.post(this.resAuthUrl+"/login/",RestaurantOwner)
  }

}

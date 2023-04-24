import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantAuthService {

  constructor(private httpClient=HttpClient) { }

  resAuthUrl = "";

  restaurantOwnerRegistration(){}
}

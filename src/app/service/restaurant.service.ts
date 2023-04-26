import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dishes } from '../model/restaurant/dishes';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  constructor(private httpClient:HttpClient) { }

  restaurantServiceUrl = "http://localhost:5000/restaurant-service";

  getRestaurant(restaurantOwnerId:any){
    let httpHeaders =  new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem("restaurant-Owner-Token")
    });
    let requestOption = {headers : httpHeaders}
    return this.httpClient.get(this.restaurantServiceUrl+"/getOwnerRestaurant/"+restaurantOwnerId,requestOption);
  }

  addRestaurant(restaurantOwnerId:any,restaurant:any){
    // ownerId = get
    let httpHeaders =  new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem("restaurant-Owner-Token")
    });
    let requestOption = {headers : httpHeaders}
    return this.httpClient.post(this.restaurantServiceUrl+"/add-restaurant/"+restaurantOwnerId,restaurant,requestOption);
  }

  addDish(dish:any, restaurantName:any){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem("restaurant-Owner-Token")
    })
    let requestOption = {headers : httpHeaders}
    return this.httpClient.post(this.restaurantServiceUrl+"/add-dish/"+restaurantName,dish,requestOption);
  }

  updateRestaurant(restaurant:any){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem("restaurant-Owner-Token")
    })
    let requestOption = {headers : httpHeaders}
    return this.httpClient.put(this.restaurantServiceUrl+"/updateRestaurant/"+restaurant,requestOption);
  }

  updateDish(dish:any){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem("restaurant-Owner-Token")
    })
    let requestOption = {headers : httpHeaders}
    return this.httpClient.put(this.restaurantServiceUrl+"/updateDishes/"+dish,requestOption);
  }

  deleteDishes(dishName:any){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem("restaurant-Owner-Token")
    })
    let requestOption = {headers : httpHeaders}
    return this.httpClient.delete(this.restaurantServiceUrl+"/deleteDish/"+dishName,requestOption);
  }

  deleteRestaurant(restaurantName:any){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem("restaurant-Owner-Token")
    })
    let requestOption = {headers : httpHeaders}
    return this.httpClient.delete(this.restaurantServiceUrl+"/deleteDish/"+restaurantName,requestOption);
  }

}

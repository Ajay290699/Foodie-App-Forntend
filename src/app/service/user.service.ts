import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Dishes } from '../model/restaurant/dishes';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient) { }

  userServcieUrl = "http://localhost:9999/foodieApp/userService/";

  // orderUrl

  addDishesToUserCart(dish : Dishes){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem("token")
    })
    let requestOption = {headers : httpHeaders}
    return this.httpclient.post(this.userServcieUrl+"addDishesToUserCart",dish,requestOption)
  }

  getAllDishFromCart(){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem("token")
    })
    let requestOption = {headers : httpHeaders}
    return this.httpclient.get(this.userServcieUrl+"getUserCartAllDishes",requestOption) 
  }


}

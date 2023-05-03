import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpclient:HttpClient) { }

  userServcieUrl = "http://localhost:9999/foodieApp/userService/";

  // orderUrl

  addDishesToUserCart(Dish :any){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem("User_Token")
    })
    let requestOption = {headers : httpHeaders}
    return this.httpclient.post(this.userServcieUrl+"addDishesToUserCart",Dish,requestOption)
  }

  getAllDishFromCart(){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem("User_Token")
    })
    let requestOption = {headers : httpHeaders}
    return this.httpclient.get(this.userServcieUrl+"getUserCartAllDishes",requestOption) 
  }

  addDishesToUserFavorite(Dish :any){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem("User_Token")
    })
    let requestOption = {headers : httpHeaders}
    return this.httpclient.post(this.userServcieUrl+"addDishesToUserFavourite",Dish,requestOption)
  }

  addResturantToUserFavourite(Restaurant:any){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem("User_Token")
    })
    let requestOption = {headers : httpHeaders}
    return this.httpclient.post(this.userServcieUrl+"addRestaurantToUserFavourite",Restaurant,requestOption)
  }
  getAllDishFromFavorite(){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem("User_Token")
    })
    let requestOption = {headers : httpHeaders}
    return this.httpclient.get(this.userServcieUrl+"getUserFavouriteAllDishes",requestOption) 
  }

  getAllResturantFromFavourite(){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem("User_Token")
    })
    let requestOption = {headers : httpHeaders}
    return this.httpclient.get(this.userServcieUrl+"getUserFavouriteAllRestaurants",requestOption) 
  }

  deleteDishFromCart(dish:any){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem("User_Token")
    })
    let requestOption = {headers : httpHeaders}
    return this.httpclient.post(this.userServcieUrl+"deleteDishesFromUserCart",dish,requestOption) 
  }

  deleteDishFromFavourite(dish:any){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem("User_Token")
    })
    let requestOption = {headers : httpHeaders}
    return this.httpclient.post(this.userServcieUrl+"deleteDishesFromUserFavourite",dish,requestOption) 
  }

  

  deleteRestaurantFromFavourite(restaurant:any){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem("User_Token")
    })
    let requestOption = {headers : httpHeaders}
    return this.httpclient.post(this.userServcieUrl+"deleteRestaurantFromUserFavourite",restaurant,requestOption) 
  }

  getUser(){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem("User_Token")
    })
    let requestOption = {headers : httpHeaders}
    return this.httpclient.get(this.userServcieUrl+"getUserDetails",requestOption) 
  }

}
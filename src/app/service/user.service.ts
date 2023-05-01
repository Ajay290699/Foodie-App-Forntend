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
      'Authorization' : 'Bearer ' +localStorage.getItem("token")
    })
    let requestOption = {headers : httpHeaders}
    return this.httpclient.post(this.userServcieUrl+"addDishesToUserCart",Dish,requestOption)
  }

  getAllDishFromCart(){
    let httpHeaders = new HttpHeaders({
      'Authorization' : 'Bearer ' +localStorage.getItem("token")
    })
    let requestOption = {headers : httpHeaders}
    return this.httpclient.get(this.userServcieUrl+"getUserCartAllDishes",requestOption) 
  }


}

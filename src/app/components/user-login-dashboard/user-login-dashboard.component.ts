import { Component } from '@angular/core';
import { Dishes } from 'src/app/model/restaurant/dishes';
import { Restaurant } from 'src/app/model/restaurant/restaurant';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-login-dashboard',
  templateUrl: './user-login-dashboard.component.html',
  styleUrls: ['./user-login-dashboard.component.css']
})
export class UserLoginDashboardComponent {

  constructor(private restaurantService:RestaurantService, private userServcie:UserService){
    console.log(this.getAllDishes);
    this.getAllRestaurant();
    this.getAllDishes();
  }

  allRestaurant:any;

  getAllRestaurant(){
    this.restaurantService.getRestaurant().subscribe(
      response=>{
        this.allRestaurant = response as Restaurant[];
        console.log(response);
      }
    ),(error: any)=>{
      console.log(error)
    }
      
  }

  allDishes:any;

  getAllDishes(){
    this.restaurantService.getAllDish().subscribe(
      res=>{
        this.allDishes = res as Dishes[];
        console.log(res);
      }
    ),
    (error:any)=>{
      console.log(error)
    }
  }

  num:any=0;
  color="black";
  changecolor(){
    if(this.num==0)
    {
      this.color="red";
      this.num=1;
      alert("Added to Favourites");
  }
    else
    {
       this.color="black";
       this.num=0;
       alert("Removed from Favourites");
    }
  }

a:any;
b:any;
addToCart(dish:any)
{
  this.a=document.getElementById("i");

        dish.quantity=this.a.value;
    this.userServcie.addDishesToUserCart(dish).subscribe(
      response=>{
        
        console.log(response);
        alert("dish added to cart");
      }
    ),
    (error:any)=>{
      console.log(error);
    }
}

addDishToFavourite(dish:any){
this.userServcie.addDishesToUserFavorite(dish).subscribe(
  response=> {
    alert("dish added in favorite.....");
  },
  (err:any)=>{
    console.log(err);
  }
)
}

addResturantToFavourite(restaurant:any){
  this.userServcie.addResturantToUserFavourite(restaurant).subscribe(
    response=> {
      alert("resturant added in favorite.....");
    },
    (err:any)=>{
      console.log(err);
    }
  )
}
}
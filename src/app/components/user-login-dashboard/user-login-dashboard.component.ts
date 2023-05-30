import { Component } from '@angular/core';
import { Dishes } from 'src/app/model/restaurant/dishes';
import { Restaurant } from 'src/app/model/restaurant/restaurant';
import { RestaurantService } from 'src/app/service/restaurant.service';
import { UserService } from 'src/app/service/user.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-login-dashboard',
  templateUrl: './user-login-dashboard.component.html',
  styleUrls: ['./user-login-dashboard.component.css']
})
export class UserLoginDashboardComponent {

  constructor(private snackBar:MatSnackBar,private restaurantService:RestaurantService, private userServcie:UserService){
    console.log(this.getAllDishes);
    this.getAllRestaurant();
    this.getAllDishes();
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  searchText:string="";

  search(){
    console.log(this.searchText);
    if(this.searchText == null){
      this.getAllRestaurant();
    }
    else{
      this.allRestaurant= this.allRestaurant.filter((data: { restaurantName: string; }) => data.restaurantName?.startsWith(this.searchText));
      console.log(this.allRestaurant);
      // alert("test")
    }
  }

  clear(){
    this.searchText= '';
    this.getAllRestaurant();
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

 

  a:any;
  b:any;
    addToCart(dish:any,i:any)
  {
        this.a=document.getElementById("n"+i);
  
          dish.quantity=this.a.value;
          this.userServcie.addDishesToUserCart(dish).subscribe(
          response=>{
          
          console.log(response);
          this.snackBar.open("Dish added to cart","Ok",{
            horizontalPosition:this.horizontalPosition,
            verticalPosition:this.verticalPosition,
          });
        }
      ),
      (error:any)=>{
        console.log(error);
      }
  }

addDishToFavourite(dish:any){
this.userServcie.addDishesToUserFavorite(dish).subscribe(
  response=> {
    this.snackBar.open("Dish added to Favourite..","Ok",{
      horizontalPosition:this.horizontalPosition,
      verticalPosition:this.verticalPosition,
    });
  },
  (err:any)=>{
    console.log(err);
  }
)
}

addResturantToFavourite(restaurant:any){
  this.userServcie.addResturantToUserFavourite(restaurant).subscribe(
    response=> {
      this.snackBar.open("Restaurant added in Favourite..","Ok",{
        horizontalPosition:this.horizontalPosition,
        verticalPosition:this.verticalPosition,
      });
    },
    (err:any)=>{
      console.log(err);
    }
  )
}
}
import { Component } from '@angular/core';
import { Fruit } from 'src/app/model/fruit';
import { FRUITS } from 'src/app/model/fruits';
import {Dishes} from 'src/app/model/restaurant/dishes';
import { UserService } from 'src/app/service/user.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private userService:UserService, private snackBar:MatSnackBar){
    this.getDishInTable();
    this.getResturantInTable();
  }

  demo:Fruit[]=FRUITS;


 dishes:any;
 getDishInTable(){
  this.userService.getAllDishFromFavorite().subscribe(
    res=>{
      this.dishes = res;
    }
  ),(error:any)=>{
    console.log(error);
  }
}

resturantes:any;
  getResturantInTable(){
    this.userService.getAllResturantFromFavourite().subscribe(
      res=>{
        this.resturantes = res;
       
      
        // for(let a=0;a<this.dishes.length;a++)
        // {
        //      this.sum=this.sum + this.dishes.quantity*this.dishes.dishPrice;
        // }
      }
    ),(error:any)=>{
      console.log(error);
    }
  }

  a:any;
b:any;
addToCart(dish:any)
{
  this.a=document.getElementById("i");

        dish.quantity=this.a.value;
    this.userService.addDishesToUserCart(dish).subscribe(
      response=>{
        
        console.log(response);
        this.snackBar.open("Dished added to cart","Ok",{
          horizontalPosition:this.horizontalPosition,
          verticalPosition:this.verticalPosition,
        });
        // alert("dish added to cart");
      }
    ),
    (error:any)=>{
      console.log(error);
    }
}

x:any;

deleteDishFromFavourite(dish:any){
  this.userService.deleteDishFromFavourite(dish).subscribe(
    response=>{
      console.log(response);
      this.snackBar.open("Dished deleted from Favourite","Ok",{
        horizontalPosition:this.horizontalPosition,
        verticalPosition:this.verticalPosition,
      }
      );
      this.getDishInTable();
    }
  ),
  (error:any)=>{
    console.log(error);
  }
}






y:any;
deleteRestaurantFromFavourite(restaurant:any){
  this.userService.deleteRestaurantFromFavourite(restaurant).subscribe(
    response=>{
      console.log(response);
      this.snackBar.open("Restaurant deleted from Favourite","Ok",{
        horizontalPosition:this.horizontalPosition,
        verticalPosition:this.verticalPosition,
      });
      this.getResturantInTable();
    }
  ),
  (error:any)=>{
    console.log(error);
  }
}




}
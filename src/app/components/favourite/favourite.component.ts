import { Component } from '@angular/core';
import { Fruit } from 'src/app/model/fruit';
import { FRUITS } from 'src/app/model/fruits';
import {Dishes} from 'src/app/model/restaurant/dishes';
import { UserService } from 'src/app/service/user.service';
@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {

  constructor(private userService:UserService){
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




}
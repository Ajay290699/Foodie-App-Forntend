import { Component } from '@angular/core';
import { Restaurant } from 'src/app/model/restaurant/restaurant';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-user-login-dashboard',
  templateUrl: './user-login-dashboard.component.html',
  styleUrls: ['./user-login-dashboard.component.css']
})
export class UserLoginDashboardComponent {

  constructor(private restaurantService:RestaurantService){
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

}

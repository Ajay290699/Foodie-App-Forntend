import { Component } from '@angular/core';
import { Restaurant } from 'src/app/model/restaurant/restaurant';
import { RestaurantOwner } from 'src/app/model/restaurant/restaurant-owner';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-restaurant-dashboard',
  templateUrl: './restaurant-dashboard.component.html',
  styleUrls: ['./restaurant-dashboard.component.css']
})
export class RestaurantDashboardComponent {

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

}

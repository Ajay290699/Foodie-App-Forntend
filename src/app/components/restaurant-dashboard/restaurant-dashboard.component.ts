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
    // this.getOwnerById(this.id);
  }

  allRestaurant:any;

  // id : any;
  // onwer:RestaurantOwner | undefined;

  // getOwnerById(id:any){
  //   id = localStorage.getItem("resOwnerName");
  //   this.id = localStorage.getItem("resOwnerName");
  //   this.restaurantService.getOwnerById(id).subscribe(
  //     res=>{
  //       console.log(res);
  //       this.onwer=res;
  //     }
  //   ),(error:any)=>{
  //     console.log(error);
  //   }
  // }

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

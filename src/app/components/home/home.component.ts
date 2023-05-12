import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Restaurant } from 'src/app/model/restaurant/restaurant';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router,private snackBar:MatSnackBar,private restaurantService:RestaurantService){
    this.getAllRestaurant();
  }

    
horizontalPosition: MatSnackBarHorizontalPosition = 'center';
verticalPosition: MatSnackBarVerticalPosition = 'top';

searchText:string = "";

  // search(){
  //   this.snackBar.open("You need to login first","Ok",{
  //     horizontalPosition:this.horizontalPosition,
  //     verticalPosition:this.verticalPosition,
  //   });
  //   this.router.navigateByUrl("/userLogin");
  // }

  clear(){
    this.searchText= '';
    this.getAllRestaurant();
  }

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

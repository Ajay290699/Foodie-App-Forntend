import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Restaurant } from 'src/app/model/restaurant/restaurant';
import { RestaurantService } from 'src/app/service/restaurant.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-restaurant',
  templateUrl: './add-restaurant.component.html',
  styleUrls: ['./add-restaurant.component.css']
})
export class AddRestaurantComponent {

  constructor(private restaurantService:RestaurantService, private fb:FormBuilder,private snackBar:MatSnackBar){}

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  restaurantForm = this.fb.group({
    'restaurantName':[''],
    'location':['']
  })

  get restaurantName(){
      return this.restaurantForm.get('restaurantName')
  }

  get location(){
    return this.restaurantForm.get('location')
}

emailId = localStorage.getItem("resOwnerEmail");
// emailId:string="admin@gmail.com";


  registerRestuarant(){
    // const formData = { ...this.restaurantForm.value }; // create a copy of the form data
    // const body = JSON.stringify(this.restaurantForm.value); 
    console.log(this.restaurantForm.value);
    // console.log(localStorage.getItem("emailId"));
    console.log(this.emailId)
    this.restaurantService.addRestaurant(this.emailId,this.restaurantForm.value).subscribe(
      response=>{
        console.log(response);
        this.snackBar.open("Restaurant added Successfully..","Ok",{
          horizontalPosition:this.horizontalPosition,
          verticalPosition:this.verticalPosition,
        });
      }
    )
  }

}

import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RestaurantService } from 'src/app/service/restaurant.service';

@Component({
  selector: 'app-add-dishes',
  templateUrl: './add-dishes.component.html',
  styleUrls: ['./add-dishes.component.css']
})
export class AddDishesComponent {

  constructor(private restaurantService:RestaurantService, private fb:FormBuilder){}

  dishForm = this.fb.group({
    'dishName':[''],
    'type':[''],
    'dishPrice':['']
  })

  restaurantForm = this.fb.group({
    'restaurantName':['']
  })

  get restaurantName(){
    return this.dishForm.get('restaurantName')
  }

  get dishName(){
    return this.dishForm.get('dishName')
  }

  get type(){
    return this.dishForm.get('type')
  }

  get dishPrice(){
    return this.dishForm.get('dishPrice')
  }

   

  //  restaurantName1 = this.restaurantForm.value
  // sendLoginData(){
  //   console.log(this.loginForm.value);
  //   this.resAuthService.restaurantOwnerLogin(this.loginForm.value).subscribe({
  //     next:response=>{
  //       console.log(response);
  //       this.responseData = response;
  //       localStorage.setItem("restaurant-Owner-Token",this.responseData.token);
  //       localStorage.setItem("resOwnerEmail",this.responseData.emailId)
  //       console.log(localStorage.getItem("resOwnerEmail"))
  //       console.log(localStorage.getItem("restaurant-Owner-Token"));
  //         this.router.navigateByUrl("restaurantDashboard");
  //     }
  //   })

  addDishes(){
    console.log(this.dishForm.value)
    console.log(this.restaurantForm.value)
    // localStorage.setItem("restaurant",this.restaurantForm.value)
    // const body = JSON.stringify(this.restaurantForm.value)
    // const restaurantName = JSON.stringify(this.restaurantForm.value);
    this.restaurantService.addDish(this.dishForm.value,this.restaurantForm.value.restaurantName).subscribe(
      response=>{

        console.log(response);
        alert("Dish Added Successfully....")
      }
    )
  }


}

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
    'dishType':[''],
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

  get dishType(){
    return this.dishForm.get('dishType')
  }

  get dishPrice(){
    return this.dishForm.get('dishPrice')
  }

   // const body = JSON.stringify(this.restaurantForm.value)

  addDishes(){
    console.log(this.dishForm.value)
    console.log(this.restaurantForm.value)
    // const restaurantName = JSON.stringify(this.restaurantForm.value);
    this.restaurantService.addDish(this.restaurantForm.value,this.dishForm.value).subscribe(
      response=>{
        console.log(response);
        alert("Dish Added Successfully....")
      }
    )
  }


}

import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { RestaurantService } from 'src/app/service/restaurant.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-add-dishes',
  templateUrl: './add-dishes.component.html',
  styleUrls: ['./add-dishes.component.css']
})
export class AddDishesComponent {

  constructor(private restaurantService:RestaurantService,private httpClient: HttpClient, private fb:FormBuilder,private snackBar:MatSnackBar){}

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  dishForm = this.fb.group({
    'dishName':[''],
    'type':[''],
    'dishPrice':[''],
    'dishImage':['']
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

  get dishImage(){
    return this.dishForm.get('dishImage')
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

  d:any = {}

  addDishes(){
    this.imageUploadAction();
    this.d.dishName = this.dishForm.value.dishName;
    this.d.type = this.dishForm.value.type;
    this.d.dishPrice = this.dishForm.value.dishPrice;
    this.d.dishImage = this.dbImage;
    console.log(this.dishForm.value)
    console.log(this.restaurantForm.value)
    this.restaurantService.addDish(this.d,this.restaurantForm.value.restaurantName).subscribe(
      response=>{

        console.log(response);
        this.snackBar.open("Dish Added Successfully....","Ok",{
          horizontalPosition:this.horizontalPosition,
          verticalPosition:this.verticalPosition,
        });
      }
    )
  }

  uploadedImage:any;

  public onImageUpload(event:any) {
    this.uploadedImage = event.target.files[0];
  }

  
  dbImage: any;
  postResponse: any;
  successResponse?: string;

  imageUploadAction() {
    const imageFormData = new FormData();
    imageFormData.append('image', this.uploadedImage, this.uploadedImage.name);
    this.dbImage=this.uploadedImage.name;

    // this.service.propfilephoto="http://localhost:8082/images/"+this.dbImage;
    console.log(this.dbImage);

  
    this.httpClient.post('http://localhost:8082/restaurant-service/dishUpload', imageFormData, { observe: 'response' })
      .subscribe((response) => {
        if (response.status === 200) {
          
          this.postResponse = response;
          this.successResponse = this.postResponse.body.message;
        } else {
          this.successResponse = 'Image not uploaded due to some error!';
        }
      }
      );
    } 


}

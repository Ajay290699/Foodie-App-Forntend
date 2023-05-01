import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { RestaurantSignUp } from 'src/app/model/restaurant/restaurant-sign-up';
import { RestaurantAuthService } from 'src/app/service/restaurant-auth.service';
import { UserAuthService } from 'src/app/service/user-auth.service';

@Component({
  selector: 'app-restaurant-signup',
  templateUrl: './restaurant-signup.component.html',
  styleUrls: ['./restaurant-signup.component.css']
})
export class RestaurantSignupComponent {

  constructor(private fb:FormBuilder, private resAuthService:RestaurantAuthService){}

  signupForm = new FormGroup({
    'emailId':new FormControl('',[Validators.required, Validators.email]),
    'ownerName':new FormControl('',[Validators.required]),
    'password': new FormControl('',[Validators.required,Validators.minLength(8)])
  })

  get emailId(){
    return this.signupForm.get('emailId');
  }

  get password(){
    return this.signupForm.get('password');
  }

  get ownerName(){
    return this.signupForm.get('ownerName');
  }

  receiveddata:any;

  sendData(){
    console.log(this.signupForm.value);
    this.resAuthService.restaurantOwnerRegistration(<RestaurantSignUp>this.signupForm.value).subscribe({
      next:data=>{
        this.receiveddata = data;
        alert("Registered Successfully")
        console.log(this.receiveddata);
      }
    })
  }

}

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RestaurantAuthService } from 'src/app/service/restaurant-auth.service';

@Component({
  selector: 'app-restaurant-login',
  templateUrl: './restaurant-login.component.html',
  styleUrls: ['./restaurant-login.component.css']
})
export class RestaurantLoginComponent {

  constructor(private builder:FormBuilder, private resAuthService:RestaurantAuthService, private router:Router){}

  loginForm = new FormGroup({
    'emailId':new FormControl('',[Validators.required, Validators.email]),
    'password': new FormControl('',[Validators.required,Validators.minLength(8)])
  })

  get emailId(){
    return this.loginForm.get('emailId');
  }

  get password(){
    return this.loginForm.get('password');
  }

  responseData:any;

  sendLoginData(){
    console.log(this.loginForm.value);
    this.resAuthService.restaurantOwnerLogin(this.loginForm.value).subscribe({
      next:response=>{
        console.log(response);
        this.responseData = response;
        localStorage.setItem("restaurant-Owner-Token",this.responseData.token);
        console.log(localStorage.getItem("restaurant-Owner-Token"));
          this.router.navigateByUrl("restaurantDashboard");
      }
    })
  }

}

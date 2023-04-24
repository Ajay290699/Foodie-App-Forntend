import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-restaurant-signup',
  templateUrl: './restaurant-signup.component.html',
  styleUrls: ['./restaurant-signup.component.css']
})
export class RestaurantSignupComponent {

  constructor(private fb:FormBuilder){}

  signupForm = new FormGroup({
    // emailId:['',[Validators.required, Validators.email]]
    'emailId':new FormControl('',[Validators.required, Validators.email])
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

}

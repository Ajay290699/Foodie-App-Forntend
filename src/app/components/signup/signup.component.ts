import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserSignUp } from 'src/app/model/user/user-sign-up';
import { UserAuthService } from 'src/app/service/user-auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private userAuthService:UserAuthService,private router:Router){}

  signupForm= new FormGroup({
    'firstName': new FormControl('',Validators.required),
    'lastName':new FormControl('',Validators.required),
    'email':new FormControl('',[Validators.required,Validators.email]),
    'password':new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z0-9._%+-]{8,}')]),  
     'mobileNo':new FormControl('',Validators.pattern(/^[789]\d{9,9}$/)),
     'buildingName':new FormControl('',Validators.required),
     'streetName':new FormControl('',Validators.required),
     'city':new FormControl('',Validators.required),
     'state':new FormControl('',Validators.required),
     'flatNo':new FormControl('',Validators.required),
     'pincode':new FormControl('',Validators.required),
     'image':new FormControl('',Validators.required)
       
  })
 

  sendSignupData(){
    console.log(this.signupForm.value);
    this.userAuthService.userRegistration(<UserSignUp>this.signupForm.value).subscribe(
       response=>{
      console.log(response);
      alert("Registration successfull");
       }
    )
  }
  

  get firstName() { return this.signupForm.get("firstName") }

  get lastName() { return this.signupForm.get("lastName") }

  get email() { return this.signupForm.get("email") }

  get password() { return this.signupForm.get("password"); }

  get mobileNo(){ return this.signupForm.get("mobileNo");}

  get buildingName() { return this.signupForm.get("buildingName"); }

  get streetName() { return this.signupForm.get("streetName"); }

  get city() { return this.signupForm.get("city"); }

  get state() { return this.signupForm.get("state"); }

  get flatNo() { return this.signupForm.get("flatNo"); }

  get pincode() { return this.signupForm.get("pincode"); }

  get image() { return this.signupForm.get("image"); }


}

import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/service/user-auth.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private snackBar:MatSnackBar,private userAuthService:UserAuthService,private router:Router,private httpClient: HttpClient){}

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  emailpattern='^[a-z0-9._%+-]+@[a-z]+\.[a-z]{2,4}$'

  signupForm= new FormGroup({
    'firstName': new FormControl('',[Validators.required,Validators.minLength(3)]),
    'lastName':new FormControl('',[Validators.required,Validators.minLength(3)]),
    'email':new FormControl('',[Validators.required,Validators.pattern(this.emailpattern)]),
    'password':new FormControl('',[Validators.required,Validators.pattern('^[A-Za-z0-9._%+-]{8,}')]),  
     'mobileNo':new FormControl('',Validators.pattern(/^[789]\d{9,9}$/)),
     'buildingName':new FormControl('',Validators.required),
     'streetName':new FormControl('',Validators.required),
     'city':new FormControl('',Validators.required),
     'state':new FormControl('',Validators.required),
     'flatNo':new FormControl('',Validators.required),
     'pincode':new FormControl('',[Validators.required,Validators.pattern('^\d{6}$')]),
     'image':new FormControl('',Validators.required)
       
  })
 
d:any={}
  sendSignupData(){
    console.log(this.signupForm.value);
    this.imageUploadAction();
this.d.pi=this.dbImage;
this.d.firstName=this.signupForm.value.firstName;
this.d.email=this.signupForm.value.email;
this.d.password=this.signupForm.value.password;

    

    this.userAuthService.userRegistration(this.d).subscribe(
       response=>{
      console.log(response);
      this.snackBar.open("Registration successfully..","Ok",{
        horizontalPosition:this.horizontalPosition,
        verticalPosition:this.verticalPosition,
      });
      this.router.navigateByUrl('/userLogin');
       }
    ),
    (error:any )=>{
      this.snackBar.open("Email Already Exist's","Ok",{
        horizontalPosition:this.horizontalPosition,
        verticalPosition:this.verticalPosition,
      });
    }
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

  
    this.httpClient.post('http://localhost:8080/app/v1/upload', imageFormData, { observe: 'response' })
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

import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserAuthService } from 'src/app/service/user-auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router,private service:UserAuthService){}

  phonePattern = '^[7-9][0-9]{9}$';
  passwordPattern = "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$";
  emailpattern='^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$'
  

  loginForm= new FormGroup({
    email:new FormControl('',[Validators.required,Validators.pattern(this.emailpattern)]),
    password:new FormControl('',[Validators.required])
  })

  get email(){
    return this.loginForm.get("email");
  }

  get password(){
    return this.loginForm.get("password");
  }

  responseData:any;
  userLogIn()
  {
   
    console.log(this.loginForm.value);
    this.service.userLogIn(this.loginForm.value).subscribe( data1=>{
      console.log(data1);
      this.responseData = data1
      
   alert("login successfull");
   localStorage.setItem("User_Token",this.responseData.token);
     
      this.router.navigateByUrl('/userDashboard');
    },
    error=>{
      alert("invalid credentials");
    }
    )
  }

}

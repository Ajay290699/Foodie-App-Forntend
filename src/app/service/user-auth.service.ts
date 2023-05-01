import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserSignUp } from '../model/user/user-sign-up';
import { AppModule } from '../app.module';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {
 
  constructor(private httpclient:HttpClient) { }

  userAuthBaseUrl = "http://localhost:8080/app/v1";

  userRegistration(userSignUp:UserSignUp)
  {
      return this.httpclient.post(this.userAuthBaseUrl+"/register",userSignUp);
  }

  userLogIn(user:any){
      return this.httpclient.post(this.userAuthBaseUrl+"/login",user);
  }

  getUserImage(user:any){
    return this.httpclient.get(this.userAuthBaseUrl+"/file/"+user)
  }

  uploadUserImage(image:any){
    return this.httpclient.post(this.userAuthBaseUrl+"/file",image)
  }


}
import { Component } from '@angular/core';
import { UserAuthService } from 'src/app/service/user-auth.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-user-login-header',
  templateUrl: './user-login-header.component.html',
  styleUrls: ['./user-login-header.component.css']
})
export class UserLoginHeaderComponent {
  // userServcice: any;

  constructor(private userService:UserService){
    this.getUserDetails();
  }

  user:any={};

  // getUserImage(userName:any){
  //   this.userService.getUserImage(userName).subscribe(
  //     res=>{
  //         this.user = res;
  //         console.log(res);
  //     }
  //   )
  // }

getUserDetails(){
  this.userService.getUser().subscribe(
      res=>{
          this.user = res;
          console.log(res);
      }
    )
}

}

import { Component } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router,private snackBar:MatSnackBar){}

    
horizontalPosition: MatSnackBarHorizontalPosition = 'center';
verticalPosition: MatSnackBarVerticalPosition = 'top';

  search(){
    this.snackBar.open("You need to login first","Ok",{
      horizontalPosition:this.horizontalPosition,
      verticalPosition:this.verticalPosition,
    });
    this.router.navigateByUrl("/userLogin");
  }

}

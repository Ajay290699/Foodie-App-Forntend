import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import {
  MatSnackBar,
  MatSnackBarHorizontalPosition,
  MatSnackBarVerticalPosition,
} from '@angular/material/snack-bar';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private userService:UserService,private snackBar:MatSnackBar){
   
  }

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';
  
ngOnInit(){
  this.getDishInTable();
}

  dishes : any;
  sum:number=0;

  getDishInTable(){
    this.userService.getAllDishFromCart().subscribe(
      res=>{
        this.dishes = res;
      
      for(let i=0;i<this.dishes.length;i++)
  {
    this.sum=this.dishes[i].quantity*this.dishes[i].dishPrice+this.sum;
  }
      }
    ),(error:any)=>{
      console.log(error);
    }
  }

  deleteDishFromCart(dish:any){
    this.userService.deleteDishFromCart(dish).subscribe(
     response=>{
       console.log(response);
       this.snackBar.open("Dished removed","Ok",{
        horizontalPosition:this.horizontalPosition,
        verticalPosition:this.verticalPosition,
      });
       this.sum=0;
      //  this.getDishInTable(); 
       this.ngOnInit();  
       }
    )  ,(error:any)=>{
     console.log(error);
   }
 }

}
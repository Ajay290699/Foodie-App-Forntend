import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private userService:UserService){
    this.getDishInTable();
    
  }

 

  dishes : any;
  sum:any;

  getDishInTable(){
    this.userService.getAllDishFromCart().subscribe(
      res=>{
        this.dishes = res;
       
      
        // for(let a=0;a<this.dishes.length;a++)
        // {
        //      this.sum=this.sum + this.dishes.quantity*this.dishes.dishPrice;
        // }
      }
    ),(error:any)=>{
      console.log(error);
    }
  }
  deleteDishFromCart(dish:any){
     this.userService.deleteDishFromCart(dish).subscribe(
      response=>{
        console.log(response);
        alert("removed dish");
        this.getDishInTable();      }
     )  ,(error:any)=>{
      console.log(error);
    }
  }

  

}
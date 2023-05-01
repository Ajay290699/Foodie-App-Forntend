import { Component } from '@angular/core';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(private userService:UserService){}

  dishes : any;

  getDishInTable(){
    this.userService.getAllDishFromCart().subscribe(
      res=>{
        this.dishes = res;
      }
    ),(error:any)=>{
      console.log(error);
    }
  }

}

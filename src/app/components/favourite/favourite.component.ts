import { Component } from '@angular/core';
import { Fruit } from 'src/app/model/fruit';
import { FRUITS } from 'src/app/model/fruits';

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.css']
})
export class FavouriteComponent {

  demo:Fruit[]=FRUITS;
}

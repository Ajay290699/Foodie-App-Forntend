import { Favourite } from "./favourite";
import { UserAddress } from "./user-address";

export class User {
    
    email?:string;
    firstName?:string;
    lastName?:string;
    mobileNo?:number;
    buildingName?:string;
    streetName?:string;
    flatNo?:number;
    city?:string;
    state?:string;
    pincode?:number;
    
    // address?:UserAddress[];
    favourites?:Favourite[];
}

import { Injectable } from "@nestjs/common";

@Injectable()
export class UserDTO{
    firstName: string;
  
    lastName: string;
  
    isActive: boolean;

}

@Injectable()
export class UpdateUserDTO extends UserDTO{
    id:number
}
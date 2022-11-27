import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ParsedQs } from 'qs';
import { Repository } from 'typeorm';
import { UpdateUserDTO, UserDTO } from '../dto/user.dto';
import { User } from '../entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

   async create(data:UserDTO){
  const user=new User
  user.firstName=data.firstName
  user.lastName=data.lastName
  user.isActive=data.isActive
  return await this.usersRepository.save(user)         
  }
  async update(data:UpdateUserDTO){
    const user=await this.usersRepository.findOne({
      where:{id:data.id}
    })
    
    user.firstName=data.firstName
  user.lastName=data.lastName
  user.isActive=data.isActive
  return await this.usersRepository.save(user)
  }

async  findAll(): Promise<User[]> {
    return await this.usersRepository.find();
  }

async  findOne(id:number): Promise<User> {
    return await this.usersRepository.findOne({
      where:{
        id:id
      }
    });
  }

 async  remove(id: number) {
  return await  this.usersRepository.delete(id);
  }
}
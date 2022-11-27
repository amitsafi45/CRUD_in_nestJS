import { Module } from "@nestjs/common";
import {TypeOrmModule} from '@nestjs/typeorm'
import { User } from "../entities/user.entity";
import { UserController } from "./user.controller";
import { UsersService } from "./user.service";
@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers: [UserController],
   providers: [UsersService],
  })
  export class UsersModule {}
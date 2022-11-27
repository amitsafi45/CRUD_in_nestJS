import 'dotenv/config'
import { Module } from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm'
import { UsersModule } from './user/user.module';
@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'mysql',
    host: process.env.DATABASE_HOST,
    port:Number( process.env.DATABASE_PORT),
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    entities: [__dirname+'/entities/*.entity{.ts,.js}'],
    logging:true,
    synchronize: true,
  }),UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { LoginUserController } from '../auth/login-user/login-user.controller';
import { LoginUserService } from '../auth/login-user/login-user.service';
import { CreateUserService } from './create-user/create-user.service';
import { User, UserSchema } from 'src/models/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { GetUserService } from './get-user/get-user.service';
import { UserRepository } from './user.repository';

@Module({
   imports: [MongooseModule.forFeature([{ name: User.name, schema: UserSchema }])],
   controllers: [],
   exports: [CreateUserService, GetUserService],
   providers: [CreateUserService, GetUserService, UserRepository],
})
export class UserModule {}

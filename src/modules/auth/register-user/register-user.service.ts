
import { Injectable } from '@nestjs/common';
import { AuthToken } from '../auth.type';
import { JwtService } from '@nestjs/jwt';
import { CreateUserService } from 'src/modules/user/create-user/create-user.service';
import { RegisterUserRequestDto } from './register-user.dto';
import { GetUserService } from 'src/modules/user/get-user/get-user.service';
import * as bcrypt from 'bcrypt';
import { CreateUserRequestDto } from 'src/modules/user/create-user/create-user.dto';
import { LoginUserService } from '../login-user/login-user.service';
import { EmailIsAlreadyExistedError } from '../auth.errors';

@Injectable()
export class RegisterUserService {
   constructor(
      private jwtService: JwtService,
      private readonly createUserService: CreateUserService,
      private readonly getUserService: GetUserService,
      private readonly loginService: LoginUserService,
   ) {}

   /**
    * Sign up a user with the provided credentials
    * Throw error if user email is already existed
    * @param email The user's email address
    * @param password The user's password
    * @return JWT token
    */
   async signUp(email: string, password: string): Promise<AuthToken> {
      const userByEmail = await this.getUserService.getUserByEmail(email)
      if(userByEmail !== null) throw new EmailIsAlreadyExistedError("Email is already existed")

      // Create User
      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt);

      const createUserDto = new CreateUserRequestDto();
      createUserDto.email = email;
      createUserDto.hashedPassword = hashedPassword;
      await this.createUserService.createUser(createUserDto);

      // Login to get token
      const tokens = await this.loginService.signIn(email, password);
      return tokens

   }
}

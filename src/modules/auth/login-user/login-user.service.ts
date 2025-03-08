import { Injectable } from '@nestjs/common';
import { AuthToken } from '../auth.type';
import { JwtService } from '@nestjs/jwt';
import { GetUserService } from 'src/modules/user/get-user/get-user.service';
import * as bcrypt from 'bcrypt';
import { AuthenticationError } from '../auth.errors';

@Injectable()
export class LoginUserService {
   constructor(
      private readonly jwtService: JwtService,
      private readonly getUserService: GetUserService
   ) {}

   /**
    * Sign in a user with the provided credentials
    * @param email The user's email address
    * @param password The user's password
    * @return A JWT Token string for authentication
    */
   async signIn(email: string, password: string): Promise<AuthToken> {
      // Validate
      const userByEmail = await this.getUserService.getUserByEmail(email);
      if(!userByEmail) throw new AuthenticationError("Account provided is invalid");

      const isPasswordCorrect = bcrypt.compareSync(password, userByEmail.hashedPassword);
      if(!isPasswordCorrect) throw new AuthenticationError("Account provided is invalid");

      // Generate token
      const payload = {
         sub: userByEmail._id,
         email: userByEmail.email,
      }
      const accessToken = await this.jwtService.signAsync(payload)
      const refreshToken = await this.jwtService.signAsync(payload)

      return {
         accessToken: accessToken,
         refreshToken: refreshToken
      }
   }
}

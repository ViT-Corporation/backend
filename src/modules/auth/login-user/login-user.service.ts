import { Injectable } from '@nestjs/common';

@Injectable()
export class LoginUserService {
   /**
    * Sign in a user with the provided credentials
    * @param {email} - The user's email address
    * @param password - The user's password
    * @return A JWT Token string for authentication
    */
   signIn(email: string, password: string): string {
      return "abc"
   }
}

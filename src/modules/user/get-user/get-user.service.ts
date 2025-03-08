import { IUserRepository } from "../user.repository.port";
import { Injectable } from '@nestjs/common';
import { UserResponseDto } from "./get-user.dto";
import { User } from "src/models/user.schema";
import { UserRepository } from "../user.repository";

@Injectable()
export class GetUserService {
   constructor(
      private readonly userRepository: UserRepository
   ) {}

   /**
    * Get user by email. If there is no user found, return null
    * @return a user
    */
   async getUserByEmail(email: string): Promise<User | null> {
      const userByEmail = await this.userRepository.findUserByEmail(email)
      return userByEmail; 
   }
}

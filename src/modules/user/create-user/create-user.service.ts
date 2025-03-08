import { Injectable } from '@nestjs/common';
import { CreateUserRequestDto, CreateUserResponseDto } from './create-user.dto';
import { UserRepository } from "../user.repository";

@Injectable()
export class CreateUserService {
   constructor(
      private readonly userRepository: UserRepository
   ) {}

   /**
    * Create user with essential information
    * @return a created user
    */
   async createUser(user: CreateUserRequestDto): Promise<CreateUserResponseDto> {
      const userByEmail = await this.userRepository.findUserByEmail(user.email)
      if(userByEmail !== null) throw Error("Email is already existed")

      const createdUser = await this.userRepository.createUser(user)
      return createdUser
   }
}

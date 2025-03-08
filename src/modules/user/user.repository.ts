import { Injectable } from "@nestjs/common";
import { IUserRepository } from "./user.repository.port";
import { User, UserDocument } from "src/models/user.schema";
import { CreateUserRequestDto } from "./create-user/create-user.dto";
import { Model } from "mongoose";
import { InjectModel } from "@nestjs/mongoose";

@Injectable()
export class UserRepository implements IUserRepository {
   constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
   async createUser(user: CreateUserRequestDto): Promise<User> {
      const createdUser = new this.userModel({
         email: user.email,
         hashedPassword: user.hashedPassword,
         avatarUrl: user.avatarUrl,
         displayName: user.displayName,
         isConfirmed: user.isConfirmed,
      })
      return createdUser.save()
   }

   async findUserById(id: string): Promise<User | null> {
      throw new Error("Method not implemented.");
   }

   async findUserByEmail(email: string): Promise<User | null> {
      const userByEmail = await this.userModel.findOne({ email: email}).exec();
      return userByEmail;
   }

   async deleteUserById(id: string): Promise<void> {
      throw new Error("Method not implemented.");
   }

   async updateUserById(id: string, updatedUser: Partial<User>): Promise<User> {
      throw new Error("Method not implemented.");
   }
}

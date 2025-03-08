import { User } from "src/models/user.schema";
import { CreateUserRequestDto } from "./create-user/create-user.dto";

export interface IUserRepository {
   createUser(User: CreateUserRequestDto): Promise<User>;
   findUserById(id: string): Promise<User | null>;
   findUserByEmail(email: string): Promise<User | null>;
   deleteUserById(id: string): Promise<void>;
   updateUserById(id: string, updatedUser: Partial<User>): Promise<User>;
}

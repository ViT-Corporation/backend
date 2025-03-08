import { ErrorBase } from "src/libs/Error/base.error";

export type AuthenticationCodeError = "invalid-account" | "email-existed"
export class  AuthenticationError extends ErrorBase {
   readonly statusCode: string;
   readonly codeError: AuthenticationCodeError;
   constructor(message: string) {
      super(message);
      this.statusCode = "401";
      this.codeError = "invalid-account";
   }
} 

export class  EmailIsAlreadyExistedError extends ErrorBase {
   readonly statusCode: string;
   readonly codeError: AuthenticationCodeError;
   constructor(message: string) {
      super(message);
      this.statusCode = "400";
      this.codeError = "email-existed";
   }
} 

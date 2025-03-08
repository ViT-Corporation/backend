export abstract class ErrorBase extends Error {
   abstract statusCode: string;

   constructor(
      readonly message: string,
   ) {
      super(message)
   }
}

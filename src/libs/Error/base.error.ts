export abstract class ErrorBase extends Error {
   abstract code: string;
   public readonly correlationId: string;

   constructor(
      readonly message: string,
      
   ) {
      super(message)
   }
}
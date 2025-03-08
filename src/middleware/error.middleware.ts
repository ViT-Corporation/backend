import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import { ErrorBase } from 'src/libs/Error/base.error';

/**
 * This Middleware is designed to handle error throwed from Controllers, Services, ...
 * and return a error response with our designed format
 */
@Injectable()
export class ErrorMiddleware implements NestMiddleware {
   use(req: Request, res: Response, next: NextFunction) {
      try {
         next();
      } catch(error) {
         if(error instanceof ErrorBase) {
            console.error("Custom error")
            return {
               ok: false,
               data: null,
               message: error.message
            }
         }
         console.error("unpexted error")
      }
   }
}

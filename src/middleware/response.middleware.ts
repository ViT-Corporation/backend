import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';

/**
 * This Middleware is designed to format the response
 */
@Injectable()
export class ResponseMiddleware implements NestMiddleware {
   use(req: Request, res: Response, next: NextFunction) {
      console.log('Request...');
      next();
   }
}

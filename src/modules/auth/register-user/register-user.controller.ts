import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { RegisterUserService } from './register-user.service';
import { RegisterUserRequestDto } from './register-user.dto';
import { AuthToken } from '../auth.type';

@Controller('auth')
@ApiTags('Authentication')
export class RegisterUserController {
   constructor(private readonly registerService: RegisterUserService) {}

   @Post('register')
   async UserRegister(@Body() request: RegisterUserRequestDto): Promise<AuthToken> {
      return this.registerService.signUp(request.email, request.password)
   }
}

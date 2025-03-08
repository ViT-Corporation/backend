import { Body, Controller, Get, Post } from '@nestjs/common';
import { LoginUserService } from './login-user.service';
import { LoginUserRequestDto } from './login-user.dto';
import { ApiTags } from '@nestjs/swagger';

@Controller('auth')
@ApiTags('Authentication')
export class LoginUserController {
   constructor(private readonly loginService: LoginUserService) {}

   @Post('login')
   async userLogin(@Body() request: LoginUserRequestDto) {
      return this.loginService.signIn(request.email, request.password)
   }
}

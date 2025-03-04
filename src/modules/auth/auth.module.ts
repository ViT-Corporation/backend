import { Module } from '@nestjs/common';
import { LoginUserController } from './login-user/login-user.controller';
import { LoginUserService } from './login-user/login-user.service';

@Module({
  imports: [],
  controllers: [LoginUserController],
  providers: [LoginUserService],
})
export class AuthModule {}

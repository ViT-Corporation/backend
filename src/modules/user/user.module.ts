import { Module } from '@nestjs/common';
import { LoginUserController } from '../auth/login-user/login-user.controller';
import { LoginUserService } from '../auth/login-user/login-user.service';

@Module({
  imports: [],
  controllers: [LoginUserController],
  providers: [LoginUserService],
})
export class UserModule {}

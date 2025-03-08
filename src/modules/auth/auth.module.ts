import { Module } from '@nestjs/common';
import { LoginUserController } from './login-user/login-user.controller';
import { LoginUserService } from './login-user/login-user.service';
import { UserModule } from '../user/user.module';
import { RegisterUserService } from './register-user/register-user.service';
import { JwtModule } from '@nestjs/jwt';
import { RegisterUserController } from './register-user/register-user.controller';

@Module({
   imports: [
      UserModule,
      JwtModule.register({
         secret: "This need to change",
         signOptions: { expiresIn: '3m' }
      }),
   ],
   controllers: [LoginUserController, RegisterUserController],
   providers: [LoginUserService, RegisterUserService],
})
export class AuthModule {}

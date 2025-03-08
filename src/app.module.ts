import { Module } from '@nestjs/common';
import { AuthModule } from './modules/auth/auth.module';
import { UserModule } from './modules/user/user.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
   imports: [
      AuthModule,
      UserModule,
      MongooseModule.forRoot('mongodb://root:root@mongo:27017/nestflix?authSource=admin')
   ],
})
export class AppModule {}

import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class RegisterUserRequestDto {
   @MaxLength(100)
   @IsEmail()
   @ApiProperty({
      example: 'kanade@gmail.com',
      description: 'User email address',
   })
   readonly email: string;

   @MinLength(6)
   @MaxLength(20)
   @IsString()
   @ApiProperty({
      example: 'password',
      description: 'User password',
   })
   readonly password: string;
}

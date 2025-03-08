import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsBoolean, IsEmail, IsString, MaxLength, MinLength } from "class-validator";

export class UserResponseDto {
   @MaxLength(100)
   @IsEmail()
   @ApiProperty({
      example: 'kanade@gmail.com',
      description: 'User email address',
   })
   readonly email: string;

   @IsString()
   @ApiProperty({
      example: 'localhost/a.png',
      description: 'User avatar url',
   })
   readonly avatarUrl: string;

   @IsString()
   @ApiProperty({
      example: 'John harry',
      description: 'User display name',
   })
   readonly displayName: string;

   @IsBoolean()
   @ApiProperty({
      description: 'false',
   })
   readonly isConfirmed: boolean;
}

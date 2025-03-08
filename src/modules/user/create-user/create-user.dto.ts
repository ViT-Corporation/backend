import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsBoolean, IsEmail, IsOptional, IsString, MaxLength, MinLength } from "class-validator";

export class CreateUserRequestDto {
   @MaxLength(100)
   @IsEmail()
   @ApiProperty({
      example: 'kanade@gmail.com',
      description: 'User email address',
   })
   email: string;

   @IsString()
   @ApiProperty({
      example: 'as12vbbi12il9',
      description: 'User hashed password',
   })
   hashedPassword: string;

   @IsString()
   @IsOptional()
   @ApiProperty({
      example: 'localhost/a.png',
      description: 'User avatar url',
   })
   avatarUrl: string = null;

   @IsString()
   @IsOptional()
   @ApiProperty({
      example: 'John harry',
      description: 'User display name',
   })
   displayName: string = null;

   @IsBoolean()
   @IsOptional()
   @Transform(({ value }) => value ?? '')
   @ApiProperty({
      description: 'true',
   })
   isConfirmed: boolean = false;
}

export class CreateUserResponseDto {
   @MaxLength(100)
   @IsEmail()
   @ApiProperty({
      example: '1dsa9dsa-dasdb09-ddbvc-vvv00',
      description: 'User id',
   })
   readonly _id: string;
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

import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { v4 as uuidv4 } from 'uuid';

export type UserDocument = User & Document;

@Schema()
export class User {
   @Prop({ required: true, default: uuidv4 })
   _id: string;

   @Prop({ required: true, maxlength: 100 })
   email: string;

   @Prop({ required: true })
   hashedPassword: string;

   @Prop()
   refreshToken: string;

   @Prop()
   confirmationCode: string;

   @Prop()
   confirmationCodeExpire: Date;

   @Prop()
   isConfirmed: boolean;

   @Prop()
   forgotPasswordCode: string;

   @Prop()
   forgotPasswordCodeExpire: Date;

   @Prop()
   displayName: string;

   @Prop()
   avatarUrl: string;
}

export const UserSchema = SchemaFactory.createForClass(User);

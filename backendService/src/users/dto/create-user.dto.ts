import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MinLength,
} from "class-validator";
import { EUserGender, EUserRole } from "../interfaces";

export class CreateUserDto {
  @IsString()
  name: string;

  @IsString()
  @MinLength(8, {
    message: "The username must be greater than or equal 8 character",
  })
  user_name: string;

  @IsString()
  @MinLength(12, {
    message: "The password must be greater than or equal 12 character",
  })
  password: string;

  @IsDateString()
  birthday: Date;

  @IsPhoneNumber("VN")
  phone_number: string;

  @IsString()
  address: string;

  @IsEnum(EUserGender, { message: "Invalid gender" })
  gender?: EUserGender;

  @IsNumber()
  id_role: number;

  @IsNumber()
  id_department: number;

  @IsNumber()
  id_room: number;

  @IsOptional()
  @IsNumber()
  id_bed?: number;

  @IsDateString()
  create_at?: Date;

  @IsDateString()
  update_at?: Date;
}

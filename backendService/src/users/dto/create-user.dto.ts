import {
  IsDateString,
  IsEnum,
  IsNumber,
  IsOptional,
  IsPhoneNumber,
  IsString,
  MinLength,
} from "class-validator";
import { EUserGender } from "../interfaces";

export class CreateUserDto {
  @IsString()
  name: string;

  @IsPhoneNumber("VN")
  phone_number: string;

  @IsString()
  identificationCode: string;

  @IsString()
  @MinLength(8, {
    message: "The password must be greater than or equal 8 characters",
  })
  password: string;

  @IsOptional()
  @IsString()
  address: string;

  @IsOptional()
  @IsEnum(EUserGender, { message: "Invalid gender" })
  gender: EUserGender;

  @IsNumber()
  id_role: number;

  @IsOptional()
  @IsNumber()
  id_department: number;

  @IsOptional()
  @IsNumber()
  id_room: number;

  @IsOptional()
  @IsNumber()
  id_bed?: number;

  @IsDateString()
  create_at: Date;

  @IsDateString()
  update_at: Date;
}

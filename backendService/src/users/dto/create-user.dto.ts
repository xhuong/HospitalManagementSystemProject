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
import { ERole } from "@prisma/client";

export class CreateUserDto {
  @IsString()
  name: string;

  @IsPhoneNumber("VN")
  phone_number: string;

  @IsString()
  identification_code: string;

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

  @IsEnum(ERole, { message: "Invalid role" })
  role: ERole;

  @IsOptional()
  @IsNumber()
  id_department: number;

  @IsOptional()
  @IsNumber()
  id_room: number;

  @IsDateString()
  create_at: Date;

  @IsDateString()
  update_at: Date;
}

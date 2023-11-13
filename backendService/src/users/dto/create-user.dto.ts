import {
  IsDateString,
  IsEnum,
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
  username: string;

  @IsString()
  @MinLength(12, {
    message: "The password must be greater than or equal 12 character",
  })
  password: string;

  @IsString()
  address: string;

  @IsDateString()
  birthday: Date;

  @IsPhoneNumber("VN")
  readonly phoneNumber: string;

  @IsEnum(EUserGender, { message: "Invalid gender" })
  gender?: EUserGender;

  @IsString()
  role: EUserRole;
}

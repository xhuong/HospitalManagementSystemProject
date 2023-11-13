import { IsEnum, IsNotEmpty, IsString } from "class-validator";
import { EUserRole } from "src/users/interfaces";

export class CreateRoleDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(EUserRole, { message: "Invalid user role" })
  code: EUserRole;
}

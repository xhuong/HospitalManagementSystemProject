import { CreateUserDto } from "src/users/dto/create-user.dto";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreatePatientDto {
  // @IsNumber()
  // @IsNotEmpty()
  // id_user: number;

  @IsNotEmpty()
  user: CreateUserDto;
}

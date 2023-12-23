import { CreateUserDto } from "src/users/dto/create-user.dto";
import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateDoctorDto {
  // @IsNumber()
  // @IsNotEmpty()
  // id_user: number;

  @IsNotEmpty()
  user: CreateUserDto;
}

import { CreateUserDto } from "src/users/dto/create-user.dto";
import { IsNotEmpty } from "class-validator";

export class CreateAdminDto {
  @IsNotEmpty()
  user: CreateUserDto;
}

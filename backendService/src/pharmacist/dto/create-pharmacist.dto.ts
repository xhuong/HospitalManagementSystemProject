import { CreateUserDto } from "src/users/dto/create-user.dto";
import { IsNotEmpty } from "class-validator";

export class CreatePharmacistDto {
  @IsNotEmpty()
  user: CreateUserDto;
}

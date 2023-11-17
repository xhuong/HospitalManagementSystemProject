import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateBedDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  id_room: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}

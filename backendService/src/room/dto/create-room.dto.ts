import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

enum ERoomType {
  NORMAL = "NORMAL",
  VIP = "VIP",
}

export class CreateRoomDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(ERoomType, { message: "Invalid room type" })
  @IsNotEmpty()
  room_type: ERoomType;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsNumber()
  @IsNotEmpty()
  id_department: number;
}

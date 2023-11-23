import { IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";

enum EMedicalUnit {
  TABLET = "TABLET",
  BLISTER_PACK = "BLISTER_PACK",
  BOX = "BOX",
  BOTTLE = "BOTTLE",
  JAR = "JAR",
  TUBE = "TUBE",
}

export class CreateMedicalDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(EMedicalUnit, { message: "Invalid medical unit" })
  @IsNotEmpty()
  unit: EMedicalUnit;

  @IsNumber()
  @IsNotEmpty()
  price: number;
}

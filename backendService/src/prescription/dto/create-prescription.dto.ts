import { IsNotEmpty, IsNumber } from "class-validator";

export class CreatePrescriptionDto {
  @IsNumber()
  @IsNotEmpty()
  id_medical_examination: number;
}

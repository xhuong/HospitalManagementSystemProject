import { IsNotEmpty, IsNumber } from "class-validator";

export class CreatePrescriptionRelMedicalDto {
  @IsNumber()
  @IsNotEmpty()
  id_prescription: number;

  @IsNumber()
  @IsNotEmpty()
  id_medical: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}

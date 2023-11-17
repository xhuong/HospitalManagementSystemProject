import { IsNotEmpty, IsNumber } from "class-validator";

export class CreateServiceRelMedicalExaminationDto {
  @IsNumber()
  @IsNotEmpty()
  id_medical_examination: number;

  @IsNumber()
  @IsNotEmpty()
  id_service: number;

  @IsNumber()
  @IsNotEmpty()
  quantity: number;
}

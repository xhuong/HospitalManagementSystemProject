import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMedicalExaminationDto {
  @IsDateString()
  @IsNotEmpty()
  medical_examination_date: Date;

  @IsString()
  @IsNotEmpty()
  health_condition: string;

  @IsString()
  @IsNotEmpty()
  result: string;

  @IsNumber()
  @IsNotEmpty()
  id_medical_record: number;
}

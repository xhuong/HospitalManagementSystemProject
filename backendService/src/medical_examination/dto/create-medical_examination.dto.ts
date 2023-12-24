import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateMedicalExaminationDto {
  @IsNotEmpty()
  @IsDateString()
  medical_examination_date_time: Date;

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

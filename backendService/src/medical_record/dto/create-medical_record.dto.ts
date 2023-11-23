import { IsDateString, IsNotEmpty, IsNumber } from "class-validator";

export class CreateMedicalRecordDto {
  @IsNumber()
  @IsNotEmpty()
  id_patient: number;

  @IsDateString()
  @IsNotEmpty()
  import_date_time: Date;

  @IsDateString()
  @IsNotEmpty()
  export_date_time: Date;
}

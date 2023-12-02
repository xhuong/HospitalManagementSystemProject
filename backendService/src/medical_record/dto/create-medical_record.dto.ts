import {
  IsDateString,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from "class-validator";

export class CreateMedicalRecordDto {
  @IsNumber()
  @IsNotEmpty()
  id_patient: number;

  @IsDateString()
  @IsNotEmpty()
  import_date_time: Date;

  @IsOptional()
  @IsDateString()
  export_date_time?: Date;
}

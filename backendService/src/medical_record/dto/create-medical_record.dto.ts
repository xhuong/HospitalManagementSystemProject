import {
  IsDateString,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
} from "class-validator";

enum EHospitalAdmissionStatus {
  OUT_PATIENT_TREATMENT = "OUT_PATIENT_TREATMENT",
  IN_PATIENT_TREATMENT = "IN_PATIENT_TREATMENT",
}

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

  @IsEnum(EHospitalAdmissionStatus, {
    message: "Invalid hospital admission status",
  })
  hospital_admission_status: EHospitalAdmissionStatus;
}

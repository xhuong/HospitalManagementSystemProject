import { IsDateString, IsEnum, IsNotEmpty, IsNumber } from "class-validator";

enum EHealthInsuranceCardStatus {
  ACTIVE = "ACTIVE",
  INACTIVE = "INACTIVE",
}

export class CreateHealthInsuranceCardDto {
  @IsNumber()
  @IsNotEmpty()
  id_patient: number;

  @IsDateString()
  @IsNotEmpty()
  start_date: Date;

  @IsNumber()
  @IsNotEmpty()
  year_duration: number;

  @IsEnum(EHealthInsuranceCardStatus, {
    message: "Invalid health insurance card status",
  })
  @IsNotEmpty()
  status: EHealthInsuranceCardStatus;
}

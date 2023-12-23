import { IsDateString, IsEnum, IsNotEmpty, IsNumber } from "class-validator";

enum EAppointmentsStatus {
  PROCESSING = "PROCESSING",
  ACCEPTED = "ACCEPTED",
  REJECTED = "REJECTED",
}

export class CreateAppointmentDto {
  @IsNumber()
  @IsNotEmpty()
  id_patient: number;

  @IsNumber()
  @IsNotEmpty()
  id_doctor: number;

  @IsDateString()
  @IsNotEmpty()
  appointment_date: Date;

  @IsDateString()
  start_time: Date;

  @IsDateString()
  end_time: Date;

  @IsEnum(EAppointmentsStatus, { message: "Invalid role" })
  status: EAppointmentsStatus;
}

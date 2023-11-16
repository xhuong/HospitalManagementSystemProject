import { IsEnum, IsNotEmpty, IsString } from "class-validator";

export enum EDepartmentType {
  CLINICAL_DEPARTMENT = "CLINICAL_DEPARTMENT",
  CLINICAL_LABORATORY_DEPARTMENT = "CLINICAL_LABORATORY_DEPARTMENT",
  FUNCTIONAL_DEPARTMENT = "FUNCTIONAL_DEPARTMENT",
}

export class CreateDepartmentDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEnum(EDepartmentType, { message: "Invalid department type" })
  department_type: EDepartmentType;
}

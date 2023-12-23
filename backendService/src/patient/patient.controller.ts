import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from "@nestjs/common";
import { PatientService } from "./patient.service";
import { CreatePatientDto } from "./dto/create-patient.dto";
import { UpdatePatientDto } from "./dto/update-patient.dto";
import { Response } from "express";

@Controller("patient")
export class PatientController {
  constructor(private readonly patientService: PatientService) {}

  @Post("find-patient")
  findOne(
    @Body("identification_code") identification_code: string,
    @Res() response: Response,
  ) {
    return this.patientService.findOne(identification_code, response);
  }

  @Post("create-patient")
  create(
    @Body() createPatientDto: CreatePatientDto,
    @Res() response: Response,
  ) {
    return this.patientService.create(createPatientDto, response);
  }

  @Get()
  findAll(@Res() response: Response) {
    return this.patientService.findAll(response);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updatePatientDto: UpdatePatientDto,
    @Res() response: Response,
  ) {
    return this.patientService.update(+id, updatePatientDto, response);
  }

  @Delete(":id")
  remove(@Param("id") id: string, @Res() response: Response) {
    return this.patientService.remove(+id, response);
  }
}

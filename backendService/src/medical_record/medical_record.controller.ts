import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Res,
} from "@nestjs/common";
import { MedicalRecordService } from "./medical_record.service";
import { CreateMedicalRecordDto } from "./dto/create-medical_record.dto";
import { UpdateMedicalRecordDto } from "./dto/update-medical_record.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { RolesGuard } from "src/common/roles/roles.guard";
import { Roles } from "src/common/roles/roles.decorator";
import { Role } from "src/common/roles";
import { Response } from "express";

@Controller("medical-record")
export class MedicalRecordController {
  constructor(private medicalRecordService: MedicalRecordService) {}

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.ADMIN, Role.DOCTOR, Role.PHARMACIST)
  @Post()
  create(
    @Body() createMedicalRecordDto: CreateMedicalRecordDto,
    @Res() response: Response,
  ) {
    return this.medicalRecordService.create(createMedicalRecordDto, response);
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.ADMIN, Role.DOCTOR, Role.PHARMACIST)
  @Post("get-all-medical-examination")
  getAllMedicalExaminationByMedicalRecordId(
    @Body("id_medical_record") id_medical_record: number,
    @Res() response: Response,
  ) {
    return this.medicalRecordService.getAllMedicalExaminationByMedicalRecordId(
      id_medical_record,
      response,
    );
  }
  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.ADMIN, Role.DOCTOR, Role.PHARMACIST)
  @Post("get-all-by-id-patient")
  getAllMedicalRecordForPatient(
    @Body("id_patient") id_patient: number,
    @Res() response: Response,
  ) {
    return this.medicalRecordService.getAllMedicalRecordForPatient(
      id_patient,
      response,
    );
  }

  @Get()
  findAll(@Res() response: Response) {
    return this.medicalRecordService.findAll(response);
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.ADMIN, Role.DOCTOR, Role.PHARMACIST)
  @Get(":id")
  findOne(@Param("id") id: string, @Res() response: Response) {
    return this.medicalRecordService.findOne(+id, response);
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.ADMIN, Role.DOCTOR, Role.PHARMACIST)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateMedicalRecordDto: UpdateMedicalRecordDto,
    @Res() response: Response,
  ) {
    return this.medicalRecordService.update(
      +id,
      updateMedicalRecordDto,
      response,
    );
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.ADMIN, Role.DOCTOR, Role.PHARMACIST)
  @Delete(":id")
  remove(@Param("id") id: string, @Res() response: Response) {
    return this.medicalRecordService.remove(+id, response);
  }
}

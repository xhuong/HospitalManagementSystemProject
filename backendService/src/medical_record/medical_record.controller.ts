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

  // @UseGuards(AuthGuard)
  // @UseGuards(RolesGuard)
  // @Roles(Role.DOCTOR)
  // @Roles(Role.PHARMACIST)
  @Post()
  create(@Body() createMedicalRecordDto: CreateMedicalRecordDto) {
    return this.medicalRecordService.create(createMedicalRecordDto);
  }

  // @UseGuards(AuthGuard)
  // @UseGuards(RolesGuard)
  // @Roles(Role.DOCTOR)
  // @Roles(Role.PHARMACIST)
  @Get()
  findAll(@Res() response: Response) {
    return this.medicalRecordService.findAll(response);
  }

  // @UseGuards(AuthGuard)
  // @UseGuards(RolesGuard)
  // @Roles(Role.DOCTOR)
  // @Roles(Role.PHARMACIST)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.medicalRecordService.findOne(+id);
  }

  // @UseGuards(AuthGuard)
  // @UseGuards(RolesGuard)
  // @Roles(Role.DOCTOR)
  // @Roles(Role.PHARMACIST)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateMedicalRecordDto: UpdateMedicalRecordDto,
  ) {
    return this.medicalRecordService.update(+id, updateMedicalRecordDto);
  }

  // @UseGuards(AuthGuard)
  // @UseGuards(RolesGuard)
  // @Roles(Role.DOCTOR)
  // @Roles(Role.PHARMACIST)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.medicalRecordService.remove(+id);
  }
}

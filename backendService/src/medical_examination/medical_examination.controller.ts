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
import { MedicalExaminationService } from "./medical_examination.service";
import { CreateMedicalExaminationDto } from "./dto/create-medical_examination.dto";
import { UpdateMedicalExaminationDto } from "./dto/update-medical_examination.dto";
import { Response } from "express";
import { Role } from "src/common/roles";
import { Roles } from "src/common/roles/roles.decorator";
import { AuthGuard } from "src/auth/auth.guard";
import { RolesGuard } from "src/common/roles/roles.guard";

@Controller("medical-examination")
export class MedicalExaminationController {
  constructor(
    private readonly medicalExaminationService: MedicalExaminationService,
  ) {}

  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Post()
  @Roles(Role.DOCTOR, Role.PHARMACIST)
  create(
    @Body() createMedicalExaminationDto: CreateMedicalExaminationDto,
    response: Response,
  ) {
    return this.medicalExaminationService.create(
      createMedicalExaminationDto,
      response,
    );
  }

  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Get()
  @Roles(Role.DOCTOR, Role.PHARMACIST)
  findAll(@Res() response: Response) {
    return this.medicalExaminationService.findAll(response);
  }

  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Get()
  @Roles(Role.DOCTOR, Role.PHARMACIST)
  @Get(":id")
  findOne(@Param("id") id: string, response: Response) {
    return this.medicalExaminationService.findOne(+id, response);
  }

  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Get()
  @Roles(Role.DOCTOR, Role.PHARMACIST)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateMedicalExaminationDto: UpdateMedicalExaminationDto,
    response: Response,
  ) {
    return this.medicalExaminationService.update(
      +id,
      updateMedicalExaminationDto,
      response,
    );
  }

  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Get()
  @Roles(Role.DOCTOR, Role.PHARMACIST)
  @Delete(":id")
  remove(@Param("id") id: string, response: Response) {
    return this.medicalExaminationService.remove(+id, response);
  }
}

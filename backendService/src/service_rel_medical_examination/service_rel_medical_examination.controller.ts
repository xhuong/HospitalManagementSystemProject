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
import { ServiceRelMedicalExaminationService } from "./service_rel_medical_examination.service";
import { CreateServiceRelMedicalExaminationDto } from "./dto/create-service_rel_medical_examination.dto";
import { UpdateServiceRelMedicalExaminationDto } from "./dto/update-service_rel_medical_examination.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { RolesGuard } from "src/common/roles/roles.guard";
import { Roles } from "src/common/roles/roles.decorator";
import { Role } from "src/common/roles";
import { Response } from "express";

@Controller("service-rel-medical-examination")
export class ServiceRelMedicalExaminationController {
  constructor(
    private readonly serviceRelMedicalExaminationService: ServiceRelMedicalExaminationService,
  ) {}

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.DOCTOR, Role.PHARMACIST)
  @Post()
  create(
    @Body()
    createServiceRelMedicalExaminationDto: CreateServiceRelMedicalExaminationDto,
    @Res() response: Response,
  ) {
    return this.serviceRelMedicalExaminationService.create(
      createServiceRelMedicalExaminationDto,
      response,
    );
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.DOCTOR, Role.PHARMACIST)
  @Get()
  findAll(@Res() response: Response) {
    return this.serviceRelMedicalExaminationService.findAll(response);
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.DOCTOR, Role.PHARMACIST)
  @Get(":id")
  findOne(@Param("id") id: string, @Res() response: Response) {
    return this.serviceRelMedicalExaminationService.findOne(+id, response);
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.DOCTOR, Role.PHARMACIST)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body()
    updateServiceRelMedicalExaminationDto: UpdateServiceRelMedicalExaminationDto,
    @Res() response: Response,
  ) {
    return this.serviceRelMedicalExaminationService.update(
      +id,
      updateServiceRelMedicalExaminationDto,
      response,
    );
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.DOCTOR, Role.PHARMACIST)
  @Delete(":id")
  remove(@Param("id") id: string, @Res() response: Response) {
    return this.serviceRelMedicalExaminationService.remove(+id, response);
  }
}

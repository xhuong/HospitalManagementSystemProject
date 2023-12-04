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
import { PrescriptionRelMedicalService } from "./prescription_rel_medical.service";
import { CreatePrescriptionRelMedicalDto } from "./dto/create-prescription_rel_medical.dto";
import { UpdatePrescriptionRelMedicalDto } from "./dto/update-prescription_rel_medical.dto";
import { Roles } from "src/common/roles/roles.decorator";
import { Role } from "src/common/roles";
import { AuthGuard } from "src/auth/auth.guard";
import { RolesGuard } from "src/common/roles/roles.guard";
import { Response } from "express";

@Controller("prescription-rel-medical")
export class PrescriptionRelMedicalController {
  constructor(
    private readonly prescriptionRelMedicalService: PrescriptionRelMedicalService,
  ) {}

  // @UseGuards(AuthGuard, RolesGuard)
  @Post()
  // @Roles(Role.DOCTOR, Role.PHARMACIST)
  create(
    @Body() createPrescriptionRelMedicalDto: CreatePrescriptionRelMedicalDto,
    @Res() response: Response,
  ) {
    return this.prescriptionRelMedicalService.create(
      createPrescriptionRelMedicalDto,
      response,
    );
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.DOCTOR, Role.PHARMACIST)
  @Get()
  findAll(@Res() response: Response) {
    return this.prescriptionRelMedicalService.findAll(response);
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.DOCTOR, Role.PHARMACIST)
  @Get(":id")
  findOne(@Param("id") id: string, @Res() response: Response) {
    return this.prescriptionRelMedicalService.findOne(+id, response);
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.DOCTOR, Role.PHARMACIST)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updatePrescriptionRelMedicalDto: UpdatePrescriptionRelMedicalDto,
    @Res() response: Response,
  ) {
    return this.prescriptionRelMedicalService.update(
      +id,
      updatePrescriptionRelMedicalDto,
      response,
    );
  }

  // @UseGuards(AuthGuard, RolesGuard)
  @Get()
  @Roles(Role.DOCTOR, Role.PHARMACIST)
  @Delete(":id")
  remove(@Param("id") id: string, @Res() response: Response) {
    return this.prescriptionRelMedicalService.remove(+id, response);
  }
}

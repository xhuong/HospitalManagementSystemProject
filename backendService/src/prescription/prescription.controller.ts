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
import { PrescriptionService } from "./prescription.service";
import { CreatePrescriptionDto } from "./dto/create-prescription.dto";
import { UpdatePrescriptionDto } from "./dto/update-prescription.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { RolesGuard } from "src/common/roles/roles.guard";
import { Role } from "src/common/roles";
import { Roles } from "src/common/roles/roles.decorator";
import { Response } from "express";

@Controller("prescription")
export class PrescriptionController {
  constructor(private readonly prescriptionService: PrescriptionService) {}

  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Post()
  @Roles(Role.DOCTOR, Role.PHARMACIST)
  create(
    @Body() createPrescriptionDto: CreatePrescriptionDto,
    @Res() response: Response,
  ) {
    return this.prescriptionService.create(createPrescriptionDto, response);
  }

  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Get()
  @Roles(Role.DOCTOR)
  findAll(@Res() response: Response) {
    return this.prescriptionService.findAll(response);
  }
  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Get()
  @Roles(Role.DOCTOR, Role.PHARMACIST)
  @Get(":id")
  findOne(@Param("id") id: string, @Res() response: Response) {
    return this.prescriptionService.findOne(+id, response);
  }

  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Get()
  @Roles(Role.DOCTOR, Role.PHARMACIST)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updatePrescriptionDto: UpdatePrescriptionDto,
    @Res() response: Response,
  ) {
    return this.prescriptionService.update(
      +id,
      updatePrescriptionDto,
      response,
    );
  }

  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Get()
  @Roles(Role.DOCTOR, Role.PHARMACIST)
  @Delete(":id")
  remove(@Param("id") id: string, @Res() response: Response) {
    return this.prescriptionService.remove(+id, response);
  }
}

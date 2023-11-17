import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseGuards,
} from "@nestjs/common";
import { MedicalService } from "./medical.service";
import { CreateMedicalDto } from "./dto/create-medical.dto";
import { UpdateMedicalDto } from "./dto/update-medical.dto";
import { Response } from "express";
import { AuthGuard } from "src/auth/auth.guard";
import { RolesGuard } from "src/common/roles/roles.guard";
import { Role } from "src/common/roles";
import { Roles } from "src/common/roles/roles.decorator";

@Controller("medical")
export class MedicalController {
  constructor(private readonly medicalService: MedicalService) {}

  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Post()
  @Roles(Role.DOCTOR, Role.PHARMACIST)
  create(
    @Body() createMedicalDto: CreateMedicalDto,
    @Res() response: Response,
  ) {
    return this.medicalService.create(createMedicalDto, response);
  }

  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Get()
  @Roles(Role.DOCTOR, Role.PHARMACIST)
  findAll(@Res() response: Response) {
    return this.medicalService.findAll(response);
  }

  @Get(":id")
  findOne(@Param("id") id: string, @Res() response: Response) {
    return this.medicalService.findOne(+id, response);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateMedicalDto: UpdateMedicalDto,
    @Res() response: Response,
  ) {
    return this.medicalService.update(+id, updateMedicalDto, response);
  }

  @Delete(":id")
  remove(@Param("id") id: string, @Res() response: Response) {
    return this.medicalService.remove(+id, response);
  }
}

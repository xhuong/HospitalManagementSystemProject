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
import { HealthInsuranceCardService } from "./health_insurance_card.service";
import { CreateHealthInsuranceCardDto } from "./dto/create-health_insurance_card.dto";
import { UpdateHealthInsuranceCardDto } from "./dto/update-health_insurance_card.dto";
import { Response } from "express";
import { AuthGuard } from "src/auth/auth.guard";
import { RolesGuard } from "src/common/roles/roles.guard";
import { Roles } from "src/common/roles/roles.decorator";
import { Role } from "src/common/roles";

@Controller("health-insurance-card")
export class HealthInsuranceCardController {
  constructor(
    private readonly healthInsuranceCardService: HealthInsuranceCardService,
  ) {}

  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @Post()
  create(
    @Body() createHealthInsuranceCardDto: CreateHealthInsuranceCardDto,
    @Res() response: Response,
  ) {
    return this.healthInsuranceCardService.create(
      createHealthInsuranceCardDto,
      response,
    );
  }

  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN, Role.DOCTOR)
  @Get()
  findAll(@Res() response: Response) {
    return this.healthInsuranceCardService.findAll(response);
  }

  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @Get(":id")
  findOne(@Param("id") id: string, @Res() response: Response) {
    return this.healthInsuranceCardService.findOne(+id, response);
  }

  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateHealthInsuranceCardDto: UpdateHealthInsuranceCardDto,
    @Res() response: Response,
  ) {
    return this.healthInsuranceCardService.update(
      +id,
      updateHealthInsuranceCardDto,
      response,
    );
  }

  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @Delete(":id")
  remove(@Param("id") id: string, @Res() response: Response) {
    return this.healthInsuranceCardService.remove(+id, response);
  }
}

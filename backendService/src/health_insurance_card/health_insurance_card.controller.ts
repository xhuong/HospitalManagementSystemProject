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

@Controller("health-insurance-card")
export class HealthInsuranceCardController {
  constructor(
    private readonly healthInsuranceCardService: HealthInsuranceCardService,
  ) {}

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() createHealthInsuranceCardDto: CreateHealthInsuranceCardDto) {
    return this.healthInsuranceCardService.create(createHealthInsuranceCardDto);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll(@Res() response: Response) {
    return this.healthInsuranceCardService.findAll(response);
  }

  @UseGuards(AuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.healthInsuranceCardService.findOne(+id);
  }

  @UseGuards(AuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateHealthInsuranceCardDto: UpdateHealthInsuranceCardDto,
  ) {
    return this.healthInsuranceCardService.update(
      +id,
      updateHealthInsuranceCardDto,
    );
  }

  @UseGuards(AuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.healthInsuranceCardService.remove(+id);
  }
}

import {
  Controller,
  Res,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { ServiceService } from "./service.service";
import { CreateServiceDto } from "./dto/create-service.dto";
import { UpdateServiceDto } from "./dto/update-service.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { Roles } from "src/common/roles/roles.decorator";
import { Role } from "src/common/roles";
import { Response } from "express";
import { RolesGuard } from "src/common/roles/roles.guard";

@Controller("service")
export class ServiceController {
  constructor(private readonly serviceService: ServiceService) {}

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.DOCTOR, Role.PHARMACIST)
  @Post()
  create(
    @Body() createServiceDto: CreateServiceDto,
    @Res() response: Response,
  ) {
    return this.serviceService.create(createServiceDto, response);
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.DOCTOR, Role.PHARMACIST)
  @Get()
  findAll(@Res() response: Response) {
    return this.serviceService.findAll(response);
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.DOCTOR, Role.PHARMACIST)
  @Get(":id")
  findOne(@Param("id") id: string, response: Response) {
    return this.serviceService.findOne(+id, response);
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.DOCTOR, Role.PHARMACIST)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateServiceDto: UpdateServiceDto,
    @Res() response: Response,
  ) {
    return this.serviceService.update(+id, updateServiceDto, response);
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.DOCTOR, Role.PHARMACIST)
  @Delete(":id")
  remove(@Param("id") id: string, response: Response) {
    return this.serviceService.remove(+id, response);
  }
}

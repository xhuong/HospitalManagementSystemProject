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
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { Response } from "express";
import { Role } from "src/common/roles";
import { Roles } from "src/common/roles/roles.decorator";
import { RolesGuard } from "src/common/roles/roles.guard";

@Controller("user")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post("create-many")
  createManyUser(
    @Body() createUserDto: CreateUserDto[],
    @Res() response: Response,
  ) {
    return this.usersService.createMany(createUserDto, response);
  }

  @Post("view-history")
  getServiceCostForMedicalExamination(
    @Body() requestBody: any,
    @Res() response: Response,
  ) {
    return this.usersService.getServicesAndPrescriptionOfMedicalExaminationByPatientById(
      requestBody.idUser,
      response,
    );
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  @Post()
  findOne(
    @Body("identificationCode") identificationCode: string,
    @Res() response: Response,
  ) {
    return this.usersService.findOne(identificationCode, response);
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  @Post()
  create(@Body() createUserDto: CreateUserDto, @Res() response: Response) {
    return this.usersService.create(createUserDto, response);
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.DOCTOR, Role.ADMIN)
  @Get()
  findAll(@Res() response: Response) {
    return this.usersService.findAll(response);
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateUserDto: UpdateUserDto,
    @Res() response: Response,
  ) {
    return this.usersService.update(+id, updateUserDto, response);
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  @Delete(":id")
  remove(@Param("id") id: string, @Res() response: Response) {
    return this.usersService.remove(+id, response);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from "@nestjs/common";
import { AdminService } from "./admin.service";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { Response } from "express";

@Controller("admin")
export class AdminController {
  constructor(private readonly adminService: AdminService) {}

  @Post("find-by-identification-code")
  findOne(
    @Body("identification_code") identification_code: string,
    @Res() response: Response,
  ) {
    return this.adminService.findOne(identification_code, response);
  }

  @Post()
  create(@Body() createAdminDto: CreateAdminDto, @Res() response: Response) {
    return this.adminService.create(createAdminDto, response);
  }

  @Get()
  findAll(@Res() response: Response) {
    return this.adminService.findAll(response);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateAdminDto: UpdateAdminDto,
    @Res() response: Response,
  ) {
    return this.adminService.update(+id, updateAdminDto, response);
  }

  @Delete(":id")
  remove(@Param("id") id: string, @Res() response: Response) {
    return this.adminService.remove(+id, response);
  }
}

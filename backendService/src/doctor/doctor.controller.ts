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
import { DoctorService } from "./doctor.service";
import { CreateDoctorDto } from "./dto/create-doctor.dto";
import { UpdateDoctorDto } from "./dto/update-doctor.dto";
import { Response } from "express";

@Controller("doctor")
export class DoctorController {
  constructor(private readonly doctorService: DoctorService) {}

  @Post("find-by-identification-code")
  findOne(
    @Body("identification_code") identification_code: string,
    @Res() response: Response,
  ) {
    return this.doctorService.findOne(identification_code, response);
  }

  @Post()
  create(@Body() createDoctorDto: CreateDoctorDto, @Res() response: Response) {
    return this.doctorService.create(createDoctorDto, response);
  }

  @Get()
  findAll(@Res() response: Response) {
    return this.doctorService.findAll(response);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateDoctorDto: UpdateDoctorDto,
    @Res() response: Response,
  ) {
    return this.doctorService.update(+id, updateDoctorDto, response);
  }

  @Delete(":id")
  remove(@Param("id") id: string, @Res() response: Response) {
    return this.doctorService.remove(+id, response);
  }
}

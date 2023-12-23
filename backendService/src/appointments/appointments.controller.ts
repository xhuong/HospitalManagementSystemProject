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
import { AppointmentsService } from "./appointments.service";
import { CreateAppointmentDto } from "./dto/create-appointment.dto";
import { UpdateAppointmentDto } from "./dto/update-appointment.dto";
import { Response } from "express";

@Controller("appointments")
export class AppointmentsController {
  constructor(private readonly appointmentsService: AppointmentsService) {}

  @Post("create-appointment")
  create(
    @Body() createAppointmentDto: CreateAppointmentDto,
    @Res() response: Response,
  ) {
    return this.appointmentsService.create(createAppointmentDto, response);
  }

  @Get()
  findAll() {
    return this.appointmentsService.findAll();
  }

  @Post()
  findOne(@Body("id_doctor") id_doctor: string, @Res() response: Response) {
    return this.appointmentsService.findOne(+id_doctor, response);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateAppointmentDto: UpdateAppointmentDto,
  ) {
    return this.appointmentsService.update(+id, updateAppointmentDto);
  }

  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.appointmentsService.remove(+id);
  }
}

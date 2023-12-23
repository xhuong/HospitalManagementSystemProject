import { Injectable } from "@nestjs/common";
import { CreateAppointmentDto } from "./dto/create-appointment.dto";
import { UpdateAppointmentDto } from "./dto/update-appointment.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class AppointmentsService {
  constructor(private prismaService: PrismaService) {}

  async create(createAppointmentDto: CreateAppointmentDto, response: Response) {
    try {
      const data = await this.prismaService.appointments.create({
        data: createAppointmentDto,
      });
      if (!Object.is(data, null)) {
        return response.status(200).json({
          message: "create a new appointment successfully",
          status: 200,
          result: {
            data,
          },
        });
      }
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        message: "create a new appointment failed",
        status: 400,
      });
    }
  }

  findAll() {
    return `This action returns all appointments`;
  }

  // fetch all appointment of clicked doctor
  async findOne(id_doctor: number, response: Response) {
    try {
      const appointments = await this.prismaService.appointments.findMany({
        where: {
          id_doctor,
        },
        include: {
          Doctor: {
            include: {
              user: true,
            },
          },
        },
      });
      if (appointments.length > 0) {
        return response.status(200).json({
          message: `get all appointment of doctor with id = ${id_doctor} successfully`,
          status: 200,
          result: {
            appointments,
          },
        });
      } else {
        return response.status(400).json({
          message: `The appointment of doctor with id = ${id_doctor} is empty`,
          status: 400,
        });
      }
    } catch (error) {
      console.log(error);
      return response.status(400).json({
        message: `get all appointments of doctor with id = ${id_doctor} failed`,
        status: 400,
      });
    }
  }

  update(id: number, updateAppointmentDto: UpdateAppointmentDto) {
    return `This action updates a #${id} appointment`;
  }

  remove(id: number) {
    return `This action removes a #${id} appointment`;
  }
}

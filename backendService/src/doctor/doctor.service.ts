import { Injectable } from "@nestjs/common";
import { CreateDoctorDto } from "./dto/create-doctor.dto";
import { UpdateDoctorDto } from "./dto/update-doctor.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class DoctorService {
  constructor(private prisma: PrismaService) {}

  async findUserByIdentificationCode(identification_code: string) {
    return await this.prisma.user.findUnique({
      where: {
        identification_code: identification_code,
      },
    });
  }

  async create(createDoctorDto: CreateDoctorDto, response: Response) {
    try {
      const foundUser = await this.findUserByIdentificationCode(
        createDoctorDto.user.identification_code,
      );
      if (Object.is(foundUser, null)) {
        // create new record in user table

        const userData = await this.prisma.user.create({
          data: createDoctorDto.user,
        });

        // create new record in doctor table
        const doctorData = await this.prisma.doctor.create({
          data: { id_user: userData.id },
          include: {
            user: true,
          },
        });

        return response.status(200).json({
          status: 200,
          message: "Create new doctor successfully",
          result: {
            data: doctorData,
          },
        });
      } else {
        return response.status(400).json({
          status: 400,
          message:
            "Create new doctor failed, please check the identification code",
        });
      }
    } catch (error) {
      return {
        status: 400,
        message: error,
      };
    }
  }

  async findAll(response: Response) {
    try {
      const doctors = await this.prisma.doctor.findMany({
        include: {
          user: true,
        },
      });
      if (!Object.is(doctors, null)) {
        return response.status(200).json({
          status: 200,
          message: "Get all doctors successfully",
          result: {
            data: doctors,
          },
        });
      }
    } catch (error) {
      return response.status(400).json({
        status: 400,
        message: error,
      });
    }
  }

  async findOne(identification_code: string, response: Response) {
    try {
      const data = await this.prisma.doctor.findFirst({
        where: {
          user: { identification_code: identification_code },
        },
      });
      if (!Object.is(data, null)) {
        return response.status(200).json({
          status: 200,
          message: `Get doctor with identification code = ${identification_code} successfully`,
          result: {
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 200,
          message: `Get doctor with identification code = ${identification_code} failed`,
        });
      }
    } catch {
      return {
        status: 400,
        message: `Get doctor identification code =  ${identification_code} failed`,
      };
    }
  }

  async update(
    id: number,
    updateDoctorDto: UpdateDoctorDto,
    response: Response,
  ) {
    try {
      // check if the doctor exists
      const existingDoctor = await this.prisma.doctor.findUnique({
        where: { id },
        include: {
          user: true,
        },
      });

      if (!existingDoctor) {
        return response.status(400).json({
          status: 400,
          message: `Doctor with id ${id} not found`,
        });
      } else {
        // update data for user table
        const data = await this.prisma.user.update({
          where: { id: existingDoctor.id_user },
          data: updateDoctorDto,
        });

        return response.status(200).json({
          status: 200,
          message: `Update doctor with id ${id} successfully`,
          result: {
            data,
          },
        });
      }
    } catch {
      return {
        status: 400,
        message: `Update doctor with id ${id} failed`,
      };
    }
  }

  async remove(id: number, response: Response) {
    try {
      // check if the doctor exists
      const existingDoctor = await this.prisma.doctor.findUnique({
        where: { id },
        include: {
          user: true,
        },
      });

      if (!existingDoctor) {
        return response.status(400).json({
          status: 400,
          message: `Doctor with id ${id} not found`,
        });
      }
      // delete record in doctor table
      await this.prisma.doctor.delete({ where: { id } });

      // delete record in user table
      await this.prisma.user.delete({ where: { id: existingDoctor.id_user } });

      return response.status(200).json({
        status: 200,
        message: `Delete doctor with id ${id} successfully`,
      });
    } catch {
      return {
        status: 400,
        message: `Delete doctor with id ${id} failed`,
      };
    }
  }
}

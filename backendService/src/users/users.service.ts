import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Response } from "express";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async findUserByIdentificationCode(identificationCode: string) {
    return await this.prisma.user.findUnique({
      where: {
        identification_code: identificationCode,
      },
    });
  }

  async create(createUserDto: CreateUserDto, response: Response) {
    try {
      const foundUser = await this.findUserByIdentificationCode(
        createUserDto.identification_code,
      );
      if (Object.is(foundUser, null)) {
        const data = await this.prisma.user.create({
          data: createUserDto,
        });

        return response.status(200).json({
          status: 200,
          message: "Create new user successfully",
          result: {
            data,
          },
        });
      } else {
        return response.status(400).json({
          status: 400,
          message:
            "Create new user failed, please check the identification code",
        });
      }
    } catch (error) {
      return {
        status: 400,
        message: error,
      };
    }
  }

  async createMany(createUserDto: CreateUserDto[], response: Response) {
    try {
      const allUserData = await this.prisma.user.findMany();
      const listExistedUser = allUserData.filter((user) =>
        createUserDto.some(
          (userAdd) => user.identification_code === userAdd.identification_code,
        ),
      );

      if (listExistedUser.length) {
        return response.status(400).json({
          status: 400,
          message: `The list user${
            listExistedUser.length > 1 ? "s" : ""
          } below existed, please add another one or remove it`,
          result: {
            data: listExistedUser,
          },
        });
      } else {
        const data = await this.prisma.user.createMany({
          data: createUserDto,
        });
        return response.status(200).json({
          status: 200,
          message: "Created multiple users successfully",
          result: {
            data,
          },
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
      const users = await this.prisma.user.findMany();
      if (users) {
        return response.status(200).json({
          status: 200,
          message: "Get all users successfully",
          result: {
            data: users,
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
      const data = await this.prisma.user.findFirst({
        where: { identification_code: identification_code },
      });
      return response.status(200).json({
        status: 200,
        message: `Get user ${identification_code} successfully`,
        result: {
          data,
        },
      });
    } catch {
      return {
        status: 400,
        message: `Get user ${identification_code} failed`,
      };
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto, response: Response) {
    try {
      const data = await this.prisma.user.update({
        where: { id },
        data: updateUserDto,
      });

      return response.status(200).json({
        status: 200,
        message: `Update user with id ${id} successfully`,
        result: {
          data,
        },
      });
    } catch {
      return {
        status: 400,
        message: `Update user with id ${id} failed`,
      };
    }
  }

  async remove(id: number, response: Response) {
    try {
      await this.prisma.user.delete({ where: { id } });
      return response.status(200).json({
        status: 200,
        message: `Delete user with id ${id} successfully`,
      });
    } catch {
      return {
        status: 400,
        message: `Delete user with id ${id} failed`,
      };
    }
  }

  async getServicesAndPrescriptionOfMedicalExaminationByPatientById(
    idUser: number,
    response: Response,
  ) {
    try {
      const data = await this.prisma.medicalRecord.findFirst({
        where: {
          id_patient: idUser,
        },
        include: {
          patient: true,
          MedicalExamination: {
            include: {
              ServiceRelMedicalExamination: {
                include: {
                  service: true,
                },
              },
              Prescription: {
                include: {
                  PrescriptionRelMedical: {
                    include: {
                      medical: true,
                    },
                  },
                },
              },
            },
          },
        },
      });
      if (!Object.is(data, null)) {
        return response.status(200).json({
          status: 200,
          message: `view history medical examination of user ${data.patient.id_user} successfully`,
          result: {
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 200,
          message: `The patient with id = ${idUser} not found`,
        });
      }
    } catch (error) {
      return response.status(400).json({
        status: 400,
        message: error,
      });
    }
  }
}

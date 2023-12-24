import { Injectable } from "@nestjs/common";
import { CreateMedicalExaminationDto } from "./dto/create-medical_examination.dto";
import { UpdateMedicalExaminationDto } from "./dto/update-medical_examination.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class MedicalExaminationService {
  constructor(private prisma: PrismaService) {}
  async create(
    createMedicalExaminationDto: CreateMedicalExaminationDto,
    response: Response,
  ) {
    try {
      const data = await this.prisma.medicalExamination.create({
        data: createMedicalExaminationDto,
      });
      // return response.status(200).json({
      //   status: 200,
      //   message: "Create new Medical Examination successfully",
      //   result: {
      //     data,
      //   },
      // });
      return response.status(200).json({
        status: 200,
        message: "Create new Medical Examination successfully",
        result: {
          data,
        },
      });
    } catch (error) {
      console.log("error", error);
      return {
        status: 400,
        message: "Bad request",
      };
    }
  }

  async findAll(response: Response) {
    try {
      const data = await this.prisma.medicalExamination.findMany();
      if (data.length) {
        return response.status(200).json({
          status: 200,
          message: "Get all Medical Examination successfully",
          result: {
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 200,
          message: "List Medical Examination record is empty",
          result: {
            data,
          },
        });
      }
    } catch (error) {
      return {
        status: 400,
        message: "Bad request",
      };
    }
  }

  async findOne(id: number, response: Response) {
    try {
      const data = this.prisma.medicalExamination.findFirst({
        where: { id },
      });
      if (data) {
        return response.status(200).json({
          status: 200,
          message: `Get Medical Examination ${id} successfully`,
          result: {
            data,
          },
        });
      } else {
        return response.status(401).json({
          status: 401,
          message: `Medical Examination ${id} not found`,
        });
      }
    } catch (error) {
      return {
        status: 400,
        message: "Bad request",
      };
    }
  }

  async update(
    id: number,
    updateMedicalExaminationDto: UpdateMedicalExaminationDto,
    response: Response,
  ) {
    try {
      const data = await this.prisma.medicalExamination.update({
        where: { id },
        data: updateMedicalExaminationDto,
      });
      return response.status(200).json({
        status: 200,
        message: `Update Medical Examination with id ${id} successfully`,
        result: {
          data,
        },
      });
    } catch (error) {
      return {
        status: 400,
        message: "Bad request",
      };
    }
  }

  async remove(id: number, response: Response) {
    try {
      await this.prisma.medicalExamination.delete({ where: { id } });
      return response.status(200).json({
        status: 200,
        message: `Delete Medical Examination with id ${id} successfully`,
      });
    } catch (error) {
      return {
        status: 400,
        message: "Bad request",
      };
    }
  }

  async getAllServicesAndPrescriptionsByIdMedicalExamination(
    id: number,
    response: Response,
  ) {
    try {
      const data = await this.prisma.medicalExamination.findMany({
        where: { id },
        include: {
          Prescription: {
            include: {
              PrescriptionRelMedical: {
                include: {
                  medical: true,
                },
              },
            },
          },
          ServiceRelMedicalExamination: {
            include: {
              service: true,
            },
          },
        },
      });
      if (data.length > 0) {
        return response.status(200).json({
          status: 200,
          message: `getAllServicesAndPrescriptionsByIdMedicalExamination with id medical examination = ${id} successfully`,
          result: {
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 200,
          message: `Services and prescriptions with id medical examination = ${id} is empy`,
        });
      }
    } catch (error) {
      return {
        status: 400,
        message: "Bad request",
      };
    }
  }
}

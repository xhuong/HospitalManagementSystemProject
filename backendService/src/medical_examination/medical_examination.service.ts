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
      if (data) {
        return {
          data,
          statusCode: 200,
          message: "Create new Medical Examination successfully",
        };
      } else {
        return {
          statusCode: 400,
          message: "Create new Medical Examination failed",
        };
      }
    } catch {
      return response.status(400).json({
        status: 400,
        result: {
          message: "Something went wrong",
        },
      });
    }
  }

  async findAll(response: Response) {
    try {
      const data = await this.prisma.medicalExamination.findMany();
      if (data.length) {
        return response.status(200).json({
          status: 200,
          result: {
            message: "Get all Medical Examination successfully",
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 200,
          result: {
            data,
            message: "List Medical Examination record is empty",
          },
        });
      }
    } catch {
      return response.status(400).json({
        status: 400,
        result: {
          message: "Something went wrong",
        },
      });
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
          result: {
            message: `Get Medical Examination ${id} successfully`,
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 200,
          result: {
            message: `Medical Examination ${id} not found`,
          },
        });
      }
    } catch {
      return response.status(400).json({
        status: 400,
        result: {
          message: `Something went wrong`,
        },
      });
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
        result: {
          message: `Update Medical Examination with id ${id} successfully`,
          data,
        },
      });
    } catch {
      return response.status(400).json({
        status: 400,
        result: {
          message: `Something went wrong`,
        },
      });
    }
  }

  async remove(id: number, response: Response) {
    try {
      await this.prisma.medicalExamination.delete({ where: { id } });
      return response.status(200).json({
        status: 200,
        result: {
          message: `Delete Medical Examination with id ${id} successfully`,
        },
      });
    } catch {
      return response.status(400).json({
        status: 400,
        result: {
          message: `Something went wrong`,
        },
      });
    }
  }
}

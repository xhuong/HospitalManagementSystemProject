import { Injectable } from "@nestjs/common";
import { CreateServiceRelMedicalExaminationDto } from "./dto/create-service_rel_medical_examination.dto";
import { UpdateServiceRelMedicalExaminationDto } from "./dto/update-service_rel_medical_examination.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class ServiceRelMedicalExaminationService {
  constructor(private readonly prisma: PrismaService) {}
  async create(
    createServiceRelMedicalExaminationDto: CreateServiceRelMedicalExaminationDto,
    response: Response,
  ) {
    try {
      const data = await this.prisma.serviceRelMedicalExamination.create({
        data: createServiceRelMedicalExaminationDto,
      });
      if (data) {
        return {
          data,
          statusCode: 200,
          message: "Create new Service Rel Medical Examination successfully",
        };
      } else {
        return {
          statusCode: 400,
          message: "Create new Service Rel Medical Examination failed",
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
      const data = await this.prisma.serviceRelMedicalExamination.findMany();
      if (data.length) {
        return response.status(200).json({
          status: 200,
          result: {
            message: "Get all Service Rel Medical Examination successfully",
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 200,
          result: {
            data,
            message: "List Service Rel Medical Examination record is empty",
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
      const data = this.prisma.serviceRelMedicalExamination.findFirst({
        where: { id },
      });
      if (data) {
        return response.status(200).json({
          status: 200,
          result: {
            message: `Get Service Rel Medical Examination ${id} successfully`,
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 200,
          result: {
            message: `Service Rel Medical Examination ${id} not found`,
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
    updateServiceRelMedicalExaminationDto: UpdateServiceRelMedicalExaminationDto,
    response: Response,
  ) {
    try {
      const data = await this.prisma.serviceRelMedicalExamination.update({
        where: { id },
        data: updateServiceRelMedicalExaminationDto,
      });
      return response.status(200).json({
        status: 200,
        result: {
          message: `Update Service Rel Medical Examination with id ${id} successfully`,
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
      await this.prisma.serviceRelMedicalExamination.delete({ where: { id } });
      return response.status(200).json({
        status: 200,
        result: {
          message: `Delete Service Rel Medical Examination with id ${id} successfully`,
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

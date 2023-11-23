import { Injectable } from "@nestjs/common";
import { CreateMedicalRecordDto } from "./dto/create-medical_record.dto";
import { UpdateMedicalRecordDto } from "./dto/update-medical_record.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class MedicalRecordService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createMedicalRecordDto: CreateMedicalRecordDto) {
    try {
      const data = await this.prisma.medicalRecord.create({
        data: createMedicalRecordDto,
      });
      if (data) {
        return {
          data,
          statusCode: 200,
          message: "Create new medicalRecord successfully",
        };
      } else {
        return {
          statusCode: 400,
          message: "Create new medicalRecord failed",
        };
      }
    } catch {
      return {
        statusCode: 400,
        message: "Something went wrong!",
      };
    }
  }

  async findAll(response: Response) {
    try {
      const data = await this.prisma.medicalRecord.findMany();
      if (data.length) {
        return response.status(200).json({
          status: 200,
          result: {
            message: "Get all medicalRecord successfully",
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 200,
          result: {
            message: "List medical record is empty",
          },
        });
      }
    } catch {
      return response.status(200).json({
        status: 400,
        result: {
          message: "Something went wrong!",
        },
      });
    }
  }

  async findOne(id: number) {
    try {
      const data = this.prisma.medicalRecord.findFirst({
        where: { id },
      });
      return data
        ? {
            data,
            message: `Get medicalRecord ${id} successfully`,
          }
        : {
            message: `MedicalRecord ${id} not found!`,
          };
    } catch {
      return {
        message: `Something went wrong!`,
      };
    }
  }

  async update(id: number, updateMedicalRecordDto: UpdateMedicalRecordDto) {
    try {
      const data = await this.prisma.medicalRecord.update({
        where: { id },
        data: updateMedicalRecordDto,
      });
      return data
        ? {
            message: `Update medicalRecord with id ${id} successfully`,
            data,
          }
        : {
            message: "Update medicalRecord with id ${id} failed",
          };
    } catch {
      return {
        message: `Update medicalRecord with id ${id} failed`,
      };
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.medicalRecord.delete({ where: { id } });
      return {
        message: `Delete medicalRecord with id ${id} successfully`,
      };
    } catch {
      return {
        message: `Delete medicalRecord with id ${id} failed`,
      };
    }
  }
}

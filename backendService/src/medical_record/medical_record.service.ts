import { Injectable } from "@nestjs/common";
import { CreateMedicalRecordDto } from "./dto/create-medical_record.dto";
import { UpdateMedicalRecordDto } from "./dto/update-medical_record.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class MedicalRecordService {
  constructor(private readonly prisma: PrismaService) {}
  async create(
    createMedicalRecordDto: CreateMedicalRecordDto,
    response: Response,
  ) {
    try {
      const data = await this.prisma.medicalRecord.create({
        data: createMedicalRecordDto,
      });
      return response.status(200).json({
        status: 200,
        message: "Get all medicalRecord successfully",
        result: {
          data,
        },
      });
    } catch {
      return {
        status: 400,
        message: "Create new medicalRecord failed",
      };
    }
  }

  async getAllMedicalRecordForPatient(id_patient: number, response: Response) {
    console.log(
      "🚀 ~ file: medical_record.service.ts:34 ~ MedicalRecordService ~ getAllMedicalRecordForPatient ~ id_patient:",
      id_patient,
    );
    try {
      const data = await this.prisma.medicalRecord.findMany({
        where: {
          id_patient,
        },
      });
      if (data.length > 0) {
        return response.status(200).json({
          status: 200,
          message: "Get all medicalRecord for patient successfully",
          result: {
            data,
          },
        });
      } else {
        return response.status(400).json({
          status: 400,
          message: "You dont have medicalRecord, please create it",
        });
      }
    } catch (error) {
      return {
        status: 400,
        message: "Bad request",
      };
    }
  }

  async findAll(response: Response) {
    try {
      const data = await this.prisma.medicalRecord.findMany();
      if (data.length) {
        return response.status(200).json({
          status: 200,
          message: "Get all medicalRecord successfully",
          result: {
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 200,
          message: "List medical record is empty",
        });
      }
    } catch {
      return response.status(200).json({
        status: 400,
        message: "Get all medicalRecord failed",
      });
    }
  }

  async findOne(id: number, response: Response) {
    try {
      const data = this.prisma.medicalRecord.findFirst({
        where: { id },
      });
      return response.status(200).json({
        status: 200,
        message: `Get medicalRecord with id = ${id} successfully`,
        result: {
          data,
        },
      });
    } catch {
      return {
        status: 400,
        message: `Get medicalRecord with id = ${id} failed`,
      };
    }
  }

  async update(
    id: number,
    updateMedicalRecordDto: UpdateMedicalRecordDto,
    response: Response,
  ) {
    try {
      const data = await this.prisma.medicalRecord.update({
        where: { id },
        data: updateMedicalRecordDto,
      });
      return response.status(200).json({
        status: 200,
        message: `Update medicalRecord with id ${id} successfully`,
        result: {
          data,
        },
      });
    } catch {
      return {
        status: 400,
        message: `Update medicalRecord with id ${id} failed`,
      };
    }
  }

  async remove(id: number, response: Response) {
    try {
      await this.prisma.medicalRecord.delete({ where: { id } });
      return response.status(200).json({
        status: 200,
        message: `Delete medicalRecord with id ${id} successfully`,
      });
    } catch {
      return {
        status: 400,
        message: `Delete medicalRecord with id ${id} failed`,
      };
    }
  }

  async getAllMedicalExaminationByMedicalRecordId(
    id: number,
    response: Response,
  ) {
    try {
      const data = await this.prisma.medicalExamination.findMany({
        where: { id_medical_record: id },
      });
      if (data.length > 0) {
        return response.status(200).json({
          status: 200,
          message: `get All Medical Examination with id medical record = ${id} successfully`,
          result: {
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 200,
          message: `list Medical Examination with id medical record = ${id} is empty`,
        });
      }
    } catch (error) {
      return {
        status: 400,
        message: error,
      };
    }
  }
}

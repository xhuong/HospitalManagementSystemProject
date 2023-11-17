import { Injectable } from "@nestjs/common";
import { CreatePrescriptionRelMedicalDto } from "./dto/create-prescription_rel_medical.dto";
import { UpdatePrescriptionRelMedicalDto } from "./dto/update-prescription_rel_medical.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class PrescriptionRelMedicalService {
  constructor(private readonly prisma: PrismaService) {}

  async create(
    createPrescriptionRelMedicalDto: CreatePrescriptionRelMedicalDto,
    response: Response,
  ) {
    try {
      const data = await this.prisma.prescriptionRelMedical.create({
        data: createPrescriptionRelMedicalDto,
      });
      if (data) {
        return {
          data,
          statusCode: 200,
          message: "Create new Prescription Rel Medical successfully",
        };
      } else {
        return {
          statusCode: 400,
          message: "Create new Prescription Rel Medical failed",
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
      const data = await this.prisma.prescriptionRelMedical.findMany();
      if (data.length) {
        return response.status(200).json({
          status: 200,
          result: {
            message: "Get all Prescription Rel Medical successfully",
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 200,
          result: {
            data,
            message: "List Prescription Rel Medical record is empty",
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
      const data = this.prisma.prescriptionRelMedical.findFirst({
        where: { id },
      });
      if (data) {
        return response.status(200).json({
          status: 200,
          result: {
            message: `Get Prescription Rel Medical ${id} successfully`,
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 200,
          result: {
            message: `Prescription Rel Medical ${id} not found`,
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
    updatePrescriptionRelMedicalDto: UpdatePrescriptionRelMedicalDto,
    response: Response,
  ) {
    try {
      const data = await this.prisma.prescriptionRelMedical.update({
        where: { id },
        data: updatePrescriptionRelMedicalDto,
      });
      return response.status(200).json({
        status: 200,
        result: {
          message: `Update Prescription Rel Medical with id ${id} successfully`,
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
      await this.prisma.prescriptionRelMedical.delete({ where: { id } });
      return response.status(200).json({
        status: 200,
        result: {
          message: `Delete Prescription Rel Medical with id ${id} successfully`,
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

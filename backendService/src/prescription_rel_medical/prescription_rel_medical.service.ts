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
      const isObjectEmpty = JSON.stringify(data) === "{}";
      return response.status(!isObjectEmpty ? 200 : 400).json({
        status: !isObjectEmpty ? 200 : 400,
        message: !isObjectEmpty
          ? "Create new Prescription Rel Medical successfully"
          : "Create new Prescription Rel Medical failed",
        result: {
          data,
        },
      });
    } catch {
      return {
        status: 400,
        message: "Something went wrong",
      };
    }
  }

  async findAll(response: Response) {
    try {
      const data = await this.prisma.prescriptionRelMedical.findMany();
      return response.status(data.length ? 200 : 400).json({
        status: data.length ? 200 : 400,
        message: data.length
          ? "Get all Prescription Rel Medical successfully"
          : "List Prescription Rel Medical record is empty",
        result: {
          data: data.length ? data : [],
        },
      });
    } catch {
      return {
        status: 400,
        message: "Something went wrong",
      };
    }
  }

  async findOne(id: number, response: Response) {
    try {
      const data = this.prisma.prescriptionRelMedical.findFirst({
        where: { id },
      });
      const isObjectEmpty = JSON.stringify(data) === "{}";
      return response.status(!isObjectEmpty ? 200 : 400).json({
        status: 200,
        message: !isObjectEmpty
          ? `Get Prescription Rel Medical ${id} successfully`
          : `Prescription Rel Medical ${id} not found`,
        result: {
          data: !isObjectEmpty ? data : [],
        },
      });
    } catch {
      return {
        status: 400,
        message: `Something went wrong`,
      };
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
        message: `Update Prescription Rel Medical with id = ${id} successfully`,
        result: {
          data,
        },
      });
    } catch {
      return {
        status: 400,
        message: `Something went wrong`,
      };
    }
  }

  async remove(id: number, response: Response) {
    try {
      await this.prisma.prescriptionRelMedical.delete({ where: { id } });
      return response.status(200).json({
        status: 200,
        message: `Delete Prescription Rel Medical with id = ${id} successfully`,
      });
    } catch {
      return {
        status: 400,
        message: `Something went wrong`,
      };
    }
  }
}

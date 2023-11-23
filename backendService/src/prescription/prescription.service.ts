import { Injectable } from "@nestjs/common";
import { CreatePrescriptionDto } from "./dto/create-prescription.dto";
import { UpdatePrescriptionDto } from "./dto/update-prescription.dto";
import { Response } from "express";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class PrescriptionService {
  constructor(private prisma: PrismaService) {}
  async create(
    createPrescriptionDto: CreatePrescriptionDto,
    response: Response,
  ) {
    try {
      const data = await this.prisma.prescription.create({
        data: createPrescriptionDto,
      });
      if (data) {
        return response.status(200).json({
          result: {
            statusCode: 200,
            message: "Create new prescription successfully",
            data,
          },
        });
      } else {
        return response.status(400).json({
          result: {
            statusCode: 400,
            message: "Create new prescription failed",
            data,
          },
        });
      }
    } catch {
      return response.status(400).json({
        result: {
          statusCode: 400,
          message: "Something went wrong",
        },
      });
    }
  }

  async findAll(response: Response) {
    try {
      const data = await this.prisma.prescription.findMany();
      return response.status(200).json({
        status: 200,
        result: {
          message: "Get all prescription successfully",
          data,
        },
      });
    } catch {
      return response.status(200).json({
        status: 400,
        result: {
          message: "Something went wrong!",
        },
      });
    }
  }

  async findOne(id: number, response: Response) {
    try {
      const data = this.prisma.prescription.findFirst({
        where: { id },
      });
      return response.status(200).json({
        status: 200,
        result: {
          message: "Get all prescription successfully",
          data,
        },
      });
    } catch {
      return response.status(200).json({
        status: 400,
        result: {
          message: "Something went wrong!",
        },
      });
    }
  }

  async update(
    id: number,
    updatePrescriptionDto: UpdatePrescriptionDto,
    response: Response,
  ) {
    try {
      await this.prisma.prescription.update({
        where: { id },
        data: updatePrescriptionDto,
      });
      return response.status(200).json({
        status: 200,
        result: {
          message: `Delete prescription with id ${id} successfully`,
        },
      });
    } catch {
      return response.status(400).json({
        status: 400,
        result: {
          message: `Update prescription with id ${id} failed`,
        },
      });
    }
  }

  async remove(id: number, response: Response) {
    try {
      await this.prisma.prescription.delete({ where: { id } });
      return response.status(200).json({
        status: 200,
        result: {
          message: `Delete prescription with id ${id} successfully`,
        },
      });
    } catch {
      return response.status(200).json({
        status: 200,
        result: {
          message: `Delete prescription with id ${id} failed`,
        },
      });
    }
  }
}

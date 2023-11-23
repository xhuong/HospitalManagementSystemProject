import { Injectable } from "@nestjs/common";
import { CreateMedicalDto } from "./dto/create-medical.dto";
import { UpdateMedicalDto } from "./dto/update-medical.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class MedicalService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createMedicalDto: CreateMedicalDto, response: Response) {
    try {
      const data = await this.prisma.medical.create({
        data: createMedicalDto,
      });
      if (data) {
        return {
          data,
          statusCode: 200,
          message: "Create new medical successfully",
        };
      } else {
        return {
          statusCode: 400,
          message: "Create new medical failed",
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
      const data = await this.prisma.medical.findMany();
      if (data.length) {
        return response.status(200).json({
          status: 200,
          result: {
            message: "Get all medical successfully",
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 200,
          result: {
            data,
            message: "List medical record is empty",
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
      const data = this.prisma.medical.findFirst({
        where: { id },
      });
      if (data) {
        return response.status(200).json({
          status: 200,
          result: {
            message: `Get medical ${id} successfully`,
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 200,
          result: {
            message: `Medical ${id} not found`,
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
    updateMedicalDto: UpdateMedicalDto,
    response: Response,
  ) {
    try {
      const data = await this.prisma.medical.update({
        where: { id },
        data: updateMedicalDto,
      });
      return response.status(200).json({
        status: 200,
        result: {
          message: `Update medical with id ${id} successfully`,
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
      await this.prisma.medical.delete({ where: { id } });
      return response.status(200).json({
        status: 200,
        result: {
          message: `Delete medical with id ${id} successfully`,
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

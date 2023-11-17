import { Injectable } from "@nestjs/common";
import { CreateMedicalDto } from "./dto/create-medical.dto";
import { UpdateMedicalDto } from "./dto/update-medical.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class MedicalService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createMedicalDto: CreateMedicalDto) {
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
      return {
        statusCode: 400,
        message: "Something went wrong!",
      };
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
      const data = this.prisma.medical.findFirst({
        where: { id },
      });
      return data
        ? {
            data,
            message: `Get medical ${id} successfully`,
          }
        : {
            message: `Medical ${id} not found!`,
          };
    } catch {
      return {
        message: `Something went wrong!`,
      };
    }
  }

  async update(id: number, updateMedicalDto: UpdateMedicalDto) {
    try {
      const data = await this.prisma.medical.update({
        where: { id },
        data: updateMedicalDto,
      });
      return data
        ? {
            message: `Update medical with id ${id} successfully`,
            data,
          }
        : {
            message: "Update medical with id ${id} failed",
          };
    } catch {
      return {
        message: `Update medical with id ${id} failed`,
      };
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.medical.delete({ where: { id } });
      return {
        message: `Delete medical with id ${id} successfully`,
      };
    } catch {
      return {
        message: `Delete medical with id ${id} failed`,
      };
    }
  }
}

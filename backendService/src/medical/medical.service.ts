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
      return response.status(200).json({
        status: 200,
        message: "Create new medical successfully",
        result: {
          data,
        },
      });
    } catch {
      return {
        status: 400,
        message: "Bad request",
      };
    }
  }

  async findAll(response: Response) {
    try {
      const data = await this.prisma.medical.findMany();
      if (data.length) {
        return response.status(200).json({
          status: 200,
          message: "Get all medical successfully",
          result: {
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 200,
          message: "List medical record is empty",
          result: {
            data,
          },
        });
      }
    } catch {
      return {
        status: 400,
        message: "Bad request",
      };
    }
  }

  async findOne(id: number, response: Response) {
    try {
      const data = this.prisma.medical.findFirst({
        where: { id },
      });
      if (!Object.is(data, null)) {
        return response.status(200).json({
          status: 200,
          message: `Get medical ${id} successfully`,
          result: {
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 200,
          message: `Medical ${id} not found`,
        });
      }
    } catch {
      return {
        status: 400,
        message: "Bad request",
      };
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
        message: `Update medical with id ${id} successfully`,
        result: {
          data,
        },
      });
    } catch {
      return {
        status: 400,
        message: "Bad request",
      };
    }
  }

  async remove(id: number, response: Response) {
    try {
      await this.prisma.medical.delete({ where: { id } });
      return response.status(200).json({
        status: 200,
        message: `Delete medical with id ${id} successfully`,
      });
    } catch {
      return {
        status: 400,
        message: "Bad request",
      };
    }
  }
}

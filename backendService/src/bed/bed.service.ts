import { Injectable } from "@nestjs/common";
import { CreateBedDto } from "./dto/create-bed.dto";
import { UpdateBedDto } from "./dto/update-bed.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class BedService {
  constructor(private readonly prisma: PrismaService) {}
  async create(createBedDto: CreateBedDto, response: Response) {
    try {
      const data = await this.prisma.bed.create({
        data: createBedDto,
      });
      if (data) {
        return {
          data,
          statusCode: 200,
          message: "Create new bed successfully",
        };
      } else {
        return {
          statusCode: 400,
          message: "Create new bed failed",
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
      const data = await this.prisma.bed.findMany();
      if (data.length) {
        return response.status(200).json({
          status: 200,
          result: {
            message: "Get all bed successfully",
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 200,
          result: {
            data,
            message: "List bed record is empty",
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
      const data = this.prisma.bed.findFirst({
        where: { id },
      });
      if (data) {
        return response.status(200).json({
          status: 200,
          result: {
            message: `Get bed ${id} successfully`,
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 200,
          result: {
            message: `Bed ${id} not found`,
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

  async update(id: number, updateBedDto: UpdateBedDto, response: Response) {
    try {
      const data = await this.prisma.bed.update({
        where: { id },
        data: updateBedDto,
      });
      return response.status(200).json({
        status: 200,
        result: {
          message: `Update bed with id ${id} successfully`,
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
      await this.prisma.bed.delete({ where: { id } });
      return response.status(200).json({
        status: 200,
        result: {
          message: `Delete bed with id ${id} successfully`,
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

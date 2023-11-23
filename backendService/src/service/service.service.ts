import { Injectable } from "@nestjs/common";
import { CreateServiceDto } from "./dto/create-service.dto";
import { UpdateServiceDto } from "./dto/update-service.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class ServiceService {
  constructor(private prisma: PrismaService) {}
  async create(createServiceDto: CreateServiceDto, response: Response) {
    try {
      const data = await this.prisma.service.create({
        data: createServiceDto,
      });
      if (data) {
        return response.status(200).json({
          result: {
            statusCode: 200,
            message: "Create new service successfully",
            data,
          },
        });
      } else {
        return response.status(400).json({
          result: {
            statusCode: 400,
            message: "Create new service failed",
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
      const data = await this.prisma.service.findMany();
      return response.status(200).json({
        status: 200,
        result: {
          message: "Get all service successfully",
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
      const data = this.prisma.service.findFirst({
        where: { id },
      });
      return response.status(200).json({
        status: 200,
        result: {
          message: "Get all service successfully",
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
    updateServiceDto: UpdateServiceDto,
    response: Response,
  ) {
    try {
      await this.prisma.service.update({
        where: { id },
        data: updateServiceDto,
      });
      return response.status(200).json({
        status: 200,
        result: {
          message: `Delete service with id ${id} successfully`,
        },
      });
    } catch {
      return response.status(400).json({
        status: 400,
        result: {
          message: `Update service with id ${id} failed`,
        },
      });
    }
  }

  async remove(id: number, response: Response) {
    try {
      await this.prisma.service.delete({ where: { id } });
      return response.status(200).json({
        status: 200,
        result: {
          message: `Delete service with id ${id} successfully`,
        },
      });
    } catch {
      return response.status(200).json({
        status: 200,
        result: {
          message: `Delete service with id ${id} failed`,
        },
      });
    }
  }
}

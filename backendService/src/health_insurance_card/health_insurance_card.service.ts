import { Injectable } from "@nestjs/common";
import { CreateHealthInsuranceCardDto } from "./dto/create-health_insurance_card.dto";
import { UpdateHealthInsuranceCardDto } from "./dto/update-health_insurance_card.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class HealthInsuranceCardService {
  constructor(private prisma: PrismaService) {}

  async create(
    createHealthInsuranceCardDto: CreateHealthInsuranceCardDto,
    response: Response,
  ) {
    try {
      const data = await this.prisma.healthInsuranceCard.create({
        data: createHealthInsuranceCardDto,
      });
      if (data) {
        return {
          data,
          statusCode: 200,
          message: "Create new health insurance card successfully",
        };
      } else {
        return {
          statusCode: 400,
          message: "Create new health insurance card failed",
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
      const data = await this.prisma.healthInsuranceCard.findMany();
      if (data.length) {
        return response.status(200).json({
          status: 200,
          result: {
            message: "Get all health insurance card successfully",
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 200,
          result: {
            data,
            message: "List health insurance card record is empty",
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
      const data = this.prisma.healthInsuranceCard.findFirst({
        where: { id },
      });
      if (data) {
        return response.status(200).json({
          status: 200,
          result: {
            message: `Get health insurance card ${id} successfully`,
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 200,
          result: {
            message: `Health insurance card ${id} not found`,
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
    updateHealthInsuranceCardDto: UpdateHealthInsuranceCardDto,
    response: Response,
  ) {
    try {
      const data = await this.prisma.healthInsuranceCard.update({
        where: { id },
        data: updateHealthInsuranceCardDto,
      });
      return response.status(200).json({
        status: 200,
        result: {
          message: `Update health insurance card with id ${id} successfully`,
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
      await this.prisma.healthInsuranceCard.delete({ where: { id } });
      return response.status(200).json({
        status: 200,
        result: {
          message: `Delete health insurance card with id ${id} successfully`,
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

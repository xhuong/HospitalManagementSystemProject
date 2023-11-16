import { Injectable } from "@nestjs/common";
import { CreateHealthInsuranceCardDto } from "./dto/create-health_insurance_card.dto";
import { UpdateHealthInsuranceCardDto } from "./dto/update-health_insurance_card.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class HealthInsuranceCardService {
  constructor(private prisma: PrismaService) {}

  async create(createHealthInsuranceCardDto: CreateHealthInsuranceCardDto) {
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
  }

  async findAll(response: Response) {
    try {
      const data = await this.prisma.healthInsuranceCard.findMany();
      if (data) {
        return response.status(200).json({
          status: 200,
          result: {
            message: "Get all health insurance card successfully",
            data,
          },
        });
      }
    } catch {
      return response.status(200).json({
        status: 400,
        result: {
          message: "Bad request",
        },
      });
    }
  }

  async findOne(id_patient: number) {
    console.log(id_patient);
    try {
      const data = this.prisma.healthInsuranceCard.findFirst({
        where: { id_patient: id_patient },
      });
      return {
        data,
        message: `Get user ${id_patient} successfully`,
      };
    } catch {
      return {
        message: `Get user ${id_patient} failed`,
      };
    }
  }

  async update(
    id: number,
    updateHealthInsuranceCardDto: UpdateHealthInsuranceCardDto,
  ) {
    try {
      const data = await this.prisma.healthInsuranceCard.update({
        where: { id },
        data: updateHealthInsuranceCardDto,
      });

      return {
        message: `Update health insurance card with id ${id} successfully`,
        data,
      };
    } catch {
      return {
        message: `Update health insurance card with id ${id} failed`,
      };
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.healthInsuranceCard.delete({ where: { id } });
      return {
        message: `Delete health insurance card with id ${id} successfully`,
      };
    } catch {
      return {
        message: `Delete health insurance card with id ${id} failed`,
      };
    }
  }
}

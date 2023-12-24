import { Injectable } from "@nestjs/common";
import { CreatePharmacistDto } from "./dto/create-pharmacist.dto";
import { UpdatePharmacistDto } from "./dto/update-pharmacist.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class PharmacistService {
  constructor(private prisma: PrismaService) {}

  async findUserByIdentificationCode(identification_code: string) {
    return await this.prisma.user.findUnique({
      where: {
        identification_code: identification_code,
      },
    });
  }

  //createPharmacistDto, updatepharmacistDto
  async create(createPharmacistDto: CreatePharmacistDto, response: Response) {
    try {
      const foundUser = await this.findUserByIdentificationCode(
        createPharmacistDto.user.identification_code,
      );
      if (Object.is(foundUser, null)) {
        // create new record in user table

        const userData = await this.prisma.user.create({
          data: createPharmacistDto.user,
        });

        // create new record in pharmacist table
        const pharmacistData = await this.prisma.pharmacist.create({
          data: { id_user: userData.id },
          include: {
            user: true,
          },
        });

        return response.status(200).json({
          status: 200,
          message: "Create new pharmacist successfully",
          result: {
            data: pharmacistData,
          },
        });
      } else {
        return response.status(400).json({
          status: 400,
          message:
            "Create new pharmacist failed, please check the identification code",
        });
      }
    } catch (error) {
      return {
        status: 400,
        message: error,
      };
    }
  }

  async findAll(response: Response) {
    try {
      const pharmacists = await this.prisma.pharmacist.findMany({
        include: {
          user: true,
        },
      });
      if (!Object.is(pharmacists, null)) {
        return response.status(200).json({
          status: 200,
          message: "Get all pharmacists successfully",
          result: {
            data: pharmacists,
          },
        });
      }
    } catch (error) {
      return response.status(400).json({
        status: 400,
        message: error,
      });
    }
  }

  async findOne(identification_code: string, response: Response) {
    try {
      const data = await this.prisma.pharmacist.findFirst({
        where: {
          user: { identification_code: identification_code },
        },
      });
      if (!Object.is(data, null)) {
        return response.status(200).json({
          status: 200,
          message: `Get pharmacist with identification code = ${identification_code} successfully`,
          result: {
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 200,
          message: `Get pharmacist with identification code = ${identification_code} failed`,
        });
      }
    } catch {
      return {
        status: 400,
        message: `Get pharmacist identification code =  ${identification_code} failed`,
      };
    }
  }

  async update(
    id: number,
    updatePharmacistDto: UpdatePharmacistDto,
    response: Response,
  ) {
    try {
      // check if the pharmacist exists
      const existingPharmacist = await this.prisma.pharmacist.findUnique({
        where: { id },
        include: {
          user: true,
        },
      });

      if (!existingPharmacist) {
        return response.status(400).json({
          status: 400,
          message: `Pharmacist with id ${id} not found`,
        });
      } else {
        // update data for user table
        const data = await this.prisma.user.update({
          where: { id: existingPharmacist.id_user },
          data: updatePharmacistDto,
        });

        return response.status(200).json({
          status: 200,
          message: `Update pharmacist with id ${id} successfully`,
          result: {
            data,
          },
        });
      }
    } catch {
      return {
        status: 400,
        message: `Update pharmacist with id ${id} failed`,
      };
    }
  }

  async remove(id: number, response: Response) {
    try {
      // check if the Pharmacist exists
      const existingPharmacist = await this.prisma.pharmacist.findUnique({
        where: { id },
        include: {
          user: true,
        },
      });

      if (!existingPharmacist) {
        return response.status(400).json({
          status: 400,
          message: `Pharmacist with id ${id} not found`,
        });
      }
      // delete record in pharmacist table
      await this.prisma.pharmacist.delete({ where: { id } });

      // delete record in user table
      await this.prisma.user.delete({
        where: { id: existingPharmacist.id_user },
      });

      return response.status(200).json({
        status: 200,
        message: `Delete pharmacist with id ${id} successfully`,
      });
    } catch {
      return {
        status: 400,
        message: `Delete pharmacist with id ${id} failed`,
      };
    }
  }
}

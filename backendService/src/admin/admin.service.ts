import { Injectable } from "@nestjs/common";
import { CreateAdminDto } from "./dto/create-admin.dto";
import { UpdateAdminDto } from "./dto/update-admin.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class AdminService {
  constructor(private prisma: PrismaService) {}

  async findUserByIdentificationCode(identification_code: string) {
    return await this.prisma.user.findUnique({
      where: {
        identification_code: identification_code,
      },
    });
  }

  async create(createAdminDto: CreateAdminDto, response: Response) {
    try {
      const foundUser = await this.findUserByIdentificationCode(
        createAdminDto.user.identification_code,
      );
      if (Object.is(foundUser, null)) {
        // create new record in user table

        const userData = await this.prisma.user.create({
          data: createAdminDto.user,
        });

        // create new record in admin table
        const adminData = await this.prisma.admin.create({
          data: { id_user: userData.id },
          include: {
            user: true,
          },
        });

        return response.status(200).json({
          status: 200,
          message: "Create new admin successfully",
          result: {
            data: adminData,
          },
        });
      } else {
        return response.status(400).json({
          status: 400,
          message:
            "Create new admin failed, please check the identification code",
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
      const admin = await this.prisma.admin.findMany({
        include: {
          user: true,
        },
      });
      if (!Object.is(admin, null)) {
        return response.status(200).json({
          status: 200,
          message: "Get all admin successfully",
          result: {
            data: admin,
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
      const data = await this.prisma.admin.findFirst({
        where: {
          user: { identification_code: identification_code },
        },
        include: {
          user: true,
        },
      });
      if (!Object.is(data, null)) {
        return response.status(200).json({
          status: 200,
          message: `Get admin with identification code = ${identification_code} successfully`,
          result: {
            data,
          },
        });
      } else {
        return response.status(200).json({
          status: 200,
          message: `Get admin with identification code = ${identification_code} failed`,
        });
      }
    } catch {
      return {
        status: 400,
        message: `Get admin identification code =  ${identification_code} failed`,
      };
    }
  }

  async update(id: number, updateAdminDto: UpdateAdminDto, response: Response) {
    try {
      // check if the admin exists
      const existingAdmin = await this.prisma.admin.findUnique({
        where: { id },
        include: {
          user: true,
        },
      });

      if (!existingAdmin) {
        return response.status(400).json({
          status: 400,
          message: `Admin with id ${id} not found`,
        });
      } else {
        // update data for user table
        const data = await this.prisma.user.update({
          where: { id: existingAdmin.id_user },
          data: updateAdminDto,
        });

        return response.status(200).json({
          status: 200,
          message: `Update admin with id ${id} successfully`,
          result: {
            data,
          },
        });
      }
    } catch {
      return {
        status: 400,
        message: `Update admin with id ${id} failed`,
      };
    }
  }

  async remove(id: number, response: Response) {
    try {
      // check if the admin exists
      const existingAdmin = await this.prisma.admin.findUnique({
        where: { id },
        include: {
          user: true,
        },
      });

      if (!existingAdmin) {
        return response.status(400).json({
          status: 400,
          message: `admin with id ${id} not found`,
        });
      }
      // delete record in admin table
      await this.prisma.admin.delete({ where: { id } });

      // delete record in user table
      await this.prisma.user.delete({ where: { id: existingAdmin.id_user } });

      return response.status(200).json({
        status: 200,
        message: `Delete admin with id ${id} successfully`,
      });
    } catch {
      return {
        status: 400,
        message: `Delete admin with id ${id} failed`,
      };
    }
  }
}

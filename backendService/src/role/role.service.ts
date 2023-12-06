import { Injectable } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  async create(createRoleDto: CreateRoleDto, response: Response) {
    try {
      const isExitRole = await this.prisma.role.findFirst({
        where: {
          code: createRoleDto.code,
        },
      });
      if (isExitRole) {
        return response.status(201).json({
          status: 201,
          message: "Role is exites",
        });
      }
      const data = await this.prisma.role.create({ data: createRoleDto });
      return response.status(200).json({
        status: 200,
        message: "Create new role successfully",
        result: {
          data,
        },
      });
    } catch (err) {
      console.log(err);
    }
  }

  async findAll() {
    try {
      const data = await this.prisma.role.findMany();
      return {
        status: 200,
        message: "Get all roles successfully",
        result: {
          data,
        },
      };
    } catch {
      return {
        status: 400,
        message: `Get all roles failed`,
      };
    }
  }

  async findOne(id: number) {
    try {
      const data = await this.prisma.role.findUnique({
        where: { id },
      });
      return {
        status: 200,
        message: `Get role data with id ${id} successfully`,
        result: {
          data,
        },
      };
    } catch {
      return {
        status: 400,
        message: `Get role data with id ${id} failed`,
      };
    }
  }

  async update(id: number, updateRoleDto: UpdateRoleDto) {
    try {
      const data = await this.prisma.role.update({
        where: { id },
        data: updateRoleDto,
      });

      return {
        message: `Update role with id ${id} successfully`,
        data,
      };
    } catch {
      return {
        message: `Update role with id ${id} failed`,
      };
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.role.delete({ where: { id } });
      return {
        message: `Delete role with id ${id} successfully`,
      };
    } catch {
      return {
        message: `Delete role with id ${id} failed`,
      };
    }
  }
}

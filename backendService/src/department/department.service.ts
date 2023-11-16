import { Injectable } from "@nestjs/common";
import { CreateDepartmentDto } from "./dto/create-department.dto";
import { UpdateDepartmentDto } from "./dto/update-department.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class DepartmentService {
  constructor(private prisma: PrismaService) {}
  async create(createDepartmentDto: CreateDepartmentDto) {
    const data = await this.prisma.department.create({
      data: createDepartmentDto,
    });
    return {
      message: "Add new department successfully",
      data,
    };
  }

  async findAll() {
    try {
      const data = await this.prisma.department.findMany();
      return {
        message: "Get all departments successfully",
        data,
      };
    } catch {
      return {
        message: `Get all departments failed`,
      };
    }
  }

  async findOne(id: number) {
    try {
      const data = await this.prisma.department.findUnique({
        where: { id },
      });
      return {
        message: `Get department data with id ${id} successfully`,
        data,
      };
    } catch {
      return {
        message: `Get department data with id ${id} failed`,
      };
    }
  }

  async update(id: number, updateDepartmentDto: UpdateDepartmentDto) {
    try {
      const data = await this.prisma.department.update({
        where: { id },
        data: updateDepartmentDto,
      });

      return {
        message: `Update department with id ${id} successfully`,
        data,
      };
    } catch {
      return {
        message: `Update department with id ${id} failed`,
      };
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.department.delete({ where: { id } });
      return {
        message: `Delete department with id ${id} successfully`,
      };
    } catch {
      return {
        message: `Delete department with id ${id} failed`,
      };
    }
  }
}

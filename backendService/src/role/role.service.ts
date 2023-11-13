import { Injectable } from "@nestjs/common";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class RoleService {
  constructor(private prisma: PrismaService) {}

  async create(createRoleDto: CreateRoleDto) {
    try {
      const isExitRole = await this.prisma.role.findFirst({
        where: {
          code: createRoleDto.code,
        },
      });
      if (isExitRole) {
        return {
          statusCode: 400,
          message: "Role is exites",
          // data,
        };
      }
      const data = await this.prisma.role.create({ data: createRoleDto });
      return {
        message: "Add new role successfully",
        data,
      };
    } catch (err) {
      console.log(err);
    }
  }

  findAll() {
    return `This action returns all role`;
  }

  findOne(id: number) {
    return `This action returns a #${id} role`;
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return `This action updates a #${id} role`;
  }

  remove(id: number) {
    return `This action removes a #${id} role`;
  }
}

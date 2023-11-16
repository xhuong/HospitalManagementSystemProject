import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Response } from "express";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  async create(createUserDto: CreateUserDto) {
    const data = await this.prisma.user.create({
      data: createUserDto,
    });
    if (data) {
      return {
        data,
        statusCode: 200,
        message: "Create new user successfully",
      };
    } else {
      return {
        statusCode: 400,
        message: "Create new user failed",
      };
    }
  }

  async findAll(response: Response) {
    try {
      const users = await this.prisma.user.findMany();
      if (users) {
        return response.status(200).json({
          status: 200,
          result: {
            message: "Get all users successfully",
            data: users,
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

  async findOne(username: string) {
    console.log(username);
    try {
      const data = this.prisma.user.findFirst({
        where: { user_name: username },
      });
      return {
        data,
        message: `Get user ${username} successfully`,
      };
    } catch {
      return {
        message: `Get user ${username} failed`,
      };
    }
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    try {
      const data = await this.prisma.user.update({
        where: { id },
        data: updateUserDto,
      });

      return {
        message: `Update user with id ${id} successfully`,
        data,
      };
    } catch {
      return {
        message: `Update user with id ${id} failed`,
      };
    }
  }

  async remove(id: number) {
    try {
      await this.prisma.user.delete({ where: { id } });
      return {
        message: `Delete user with id ${id} successfully`,
      };
    } catch {
      return {
        message: `Delete user with id ${id} failed`,
      };
    }
  }
}

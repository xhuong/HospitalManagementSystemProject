import { Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { Response } from "express";
import { PrismaService } from "src/prisma/prisma.service";

export type User = {
  userId: number;
  userName: string;
  password: string;
};

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  create(_createUserDto: CreateUserDto) {
    try {
      const isExistUser = this.prisma.user.findFirst({
        where: { user_name: _createUserDto.user_name },
      });
      console.log("isExistUser:", isExistUser);
    } catch {}
    console.log("_createUserDto data:", _createUserDto);
    return "This action adds a new user";
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

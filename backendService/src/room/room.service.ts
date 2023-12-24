import { Injectable } from "@nestjs/common";
import { CreateRoomDto } from "./dto/create-room.dto";
import { UpdateRoomDto } from "./dto/update-room.dto";
import { PrismaService } from "src/prisma/prisma.service";
import { Response } from "express";

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}
  async create(createRoomDto: CreateRoomDto, response: Response) {
    try {
      const data = await this.prisma.room.create({
        data: createRoomDto,
      });
      return response.status(200).json({
        message: "Create new room successfully",
        status: 200,
        result: {
          data,
        },
      });
    } catch {
      return {
        statusCode: 404,
        message: "Create new room failed",
      };
    }
  }

  async findAll(response: Response) {
    try {
      const data = await this.prisma.room.findMany();
      return response.status(200).json({
        message: "Get all rooms successfully",
        status: 200,
        result: {
          data,
        },
      });
    } catch {
      return {
        statusCode: 404,
        message: "Bad request",
      };
    }
  }

  async findOne(id: number, response: Response) {
    try {
      const data = await this.prisma.room.findUnique({
        where: { id },
      });
      return response.status(200).json({
        message: `get room with id = ${id} successfully`,
        status: 200,
        result: {
          data,
        },
      });
    } catch {
      return {
        statusCode: 404,
        message: "Get room with id =${id} failed",
      };
    }
  }

  async update(id: number, updateRoomDto: UpdateRoomDto, response: Response) {
    try {
      const data = await this.prisma.room.update({
        data: updateRoomDto,
        where: { id },
      });
      return response.status(200).json({
        message: `update room with id = ${id} successfully`,
        status: 200,
        result: {
          data,
        },
      });
    } catch {
      return {
        statusCode: 404,
        message: `Update room with id =${id} failed`,
      };
    }
  }

  async remove(id: number, response: Response) {
    try {
      await this.prisma.room.delete({
        where: { id },
      });
      return response.status(200).json({
        message: `delete room with id = ${id} successfully`,
        status: 200,
      });
    } catch {
      return {
        statusCode: 404,
        message: `delete room with id = ${id} failed`,
      };
    }
  }
}

import { Injectable } from "@nestjs/common";
import { CreateRoomDto } from "./dto/create-room.dto";
import { UpdateRoomDto } from "./dto/update-room.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}
  async create(createRoomDto: CreateRoomDto) {
    try {
      const data = await this.prisma.room.create({
        data: createRoomDto,
      });
      return data
        ? {
            data,
            message: "Create new room successfully",
          }
        : {
            message: "Create new room failed",
          };
    } catch {
      return {
        statusCode: 404,
        message: "Bad request",
      };
    }
  }

  async findAll() {
    try {
      const data = await this.prisma.room.findMany();
      return data
        ? {
            data,
            message: "Get all rooms successfully",
          }
        : {
            message: "Get all rooms failed",
          };
    } catch {
      return {
        statusCode: 404,
        message: "Bad request",
      };
    }
  }

  async findOne(id: number) {
    try {
      const data = await this.prisma.room.findUnique({
        where: { id },
      });
      return data
        ? {
            data,
            message: `Get room with id =${id} successfully`,
          }
        : {
            message: `Get room with id =${id} failed`,
          };
    } catch {
      return {
        statusCode: 404,
        message: "Bad request",
      };
    }
  }

  async update(id: number, updateRoomDto: UpdateRoomDto) {
    try {
      const data = await this.prisma.room.update({
        data: updateRoomDto,
        where: { id },
      });
      return data
        ? {
            data,
            message: `Update room with id =${id} successfully`,
          }
        : {
            message: `Update room with id =${id} failed`,
          };
    } catch {
      return {
        statusCode: 404,
        message: "Bad request",
      };
    }
  }

  async remove(id: number) {
    try {
      const data = await this.prisma.room.delete({
        where: { id },
      });
      return data
        ? {
            data,
            message: `Delete room with id =${id} successfully`,
          }
        : {
            message: `Delete room with id =${id} failed`,
          };
    } catch {
      return {
        statusCode: 404,
        message: "Bad request",
      };
    }
  }
}

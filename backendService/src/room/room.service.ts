import { Injectable } from "@nestjs/common";
import { CreateRoomDto } from "./dto/create-room.dto";
import { UpdateRoomDto } from "./dto/update-room.dto";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class RoomService {
  constructor(private prisma: PrismaService) {}
  async create(createRoomDto: CreateRoomDto) {
    console.log("123123");
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
  }

  findAll() {
    return `This action returns all room`;
  }

  findOne(id: number) {
    return `This action returns a #${id} room`;
  }

  update(id: number, updateRoomDto: UpdateRoomDto) {
    return `This action updates a #${id} room`;
  }

  remove(id: number) {
    return `This action removes a #${id} room`;
  }
}

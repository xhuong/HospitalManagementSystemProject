import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from "@nestjs/common";
import { RoomService } from "./room.service";
import { CreateRoomDto } from "./dto/create-room.dto";
import { UpdateRoomDto } from "./dto/update-room.dto";
import { AuthGuard } from "src/auth/auth.guard";

@Controller("room")
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  // @UseGuards(AuthGuard)
  @Post()
  create(@Body() createRoomDto: CreateRoomDto) {
    return this.roomService.create(createRoomDto);
  }

  // @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.roomService.findAll();
  }

  // @UseGuards(AuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.roomService.findOne(+id);
  }

  // @UseGuards(AuthGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateRoomDto: UpdateRoomDto) {
    return this.roomService.update(+id, updateRoomDto);
  }

  // @UseGuards(AuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.roomService.remove(+id);
  }
}

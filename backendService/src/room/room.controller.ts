import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Res,
} from "@nestjs/common";
import { RoomService } from "./room.service";
import { CreateRoomDto } from "./dto/create-room.dto";
import { UpdateRoomDto } from "./dto/update-room.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { RolesGuard } from "src/common/roles/roles.guard";
import { Roles } from "src/common/roles/roles.decorator";
import { Role } from "src/common/roles";
import { Response } from "express";

@Controller("room")
export class RoomController {
  constructor(private readonly roomService: RoomService) {}

  // @UseGuards(AuthGuard, RolesGuard)
  @Roles(Role.ADMIN)
  @Post()
  create(@Body() createRoomDto: CreateRoomDto, @Res() response: Response) {
    return this.roomService.create(createRoomDto, response);
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  @Get()
  findAll(@Res() response: Response) {
    return this.roomService.findAll(response);
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  @Get(":id")
  findOne(@Param("id") id: string, @Res() response: Response) {
    return this.roomService.findOne(+id, response);
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateRoomDto: UpdateRoomDto,
    @Res() response: Response,
  ) {
    return this.roomService.update(+id, updateRoomDto, response);
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  @Delete(":id")
  remove(@Param("id") id: string, @Res() response: Response) {
    return this.roomService.remove(+id, response);
  }
}

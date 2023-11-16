import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
  UseGuards,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDto } from "./dto/create-user.dto";
import { UpdateUserDto } from "./dto/update-user.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { Response } from "express";
import { Role } from "src/common/roles";
import { Roles } from "src/common/roles/roles.decorator";
import { RolesGuard } from "src/common/roles/roles.guard";

@Controller("user")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Post()
  @Roles(Role.ADMIN)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Post(":username")
  @Roles(Role.ADMIN)
  findOne(@Param("username") username: string) {
    return this.usersService.findOne(username);
  }

  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Get()
  @Roles(Role.ADMIN)
  findAll(@Res() response: Response) {
    return this.usersService.findAll(response);
  }

  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @UseGuards(AuthGuard)
  @UseGuards(RolesGuard)
  @Roles(Role.ADMIN)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }
}

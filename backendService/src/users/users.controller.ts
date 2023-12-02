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

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  @Post(":username")
  findOne(@Param("username") username: string) {
    return this.usersService.findOne(username);
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.DOCTOR, Role.ADMIN)
  @Get()
  findAll(@Res() response: Response) {
    return this.usersService.findAll(response);
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  // @UseGuards(AuthGuard, RolesGuard)
  // @Roles(Role.ADMIN)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }
}

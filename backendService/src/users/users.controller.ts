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

@Controller("user")
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  // @UseGuards(AuthGuard)
  @Post()
  create(@Body() createUserDto: CreateUserDto, @Res() response: Response) {
    return this.usersService.create(createUserDto, response);
  }

  @UseGuards(AuthGuard)
  @Post(":username")
  findOne(@Param(":username") username: string) {
    console.log("username", username);
    return this.usersService.findOne(username);
  }

  // @UseGuards(AuthGuard)
  @Get()
  findAll(@Res() response: Response) {
    return this.usersService.findAll(response);
  }

  @UseGuards(AuthGuard)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @UseGuards(AuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.usersService.remove(+id);
  }
}

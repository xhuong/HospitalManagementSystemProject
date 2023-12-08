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
import { RoleService } from "./role.service";
import { CreateRoleDto } from "./dto/create-role.dto";
import { UpdateRoleDto } from "./dto/update-role.dto";
import { AuthGuard } from "src/auth/auth.guard";
import { Roles } from "src/common/roles/roles.decorator";
import { Role } from "src/common/roles";
import { Response } from "express";

@Controller("role")
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @Post("create-many")
  createManyRole(
    @Body() createRoleDto: CreateRoleDto[],
    @Res() response: Response,
  ) {
    return this.roleService.createMany(createRoleDto, response);
  }

  // @UseGuards(AuthGuard)
  // @Roles(Role.ADMIN)
  @Post()
  create(@Body() createRoleDto: CreateRoleDto, @Res() response: Response) {
    return this.roleService.create(createRoleDto, response);
  }

  // @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.roleService.findAll();
  }

  // @UseGuards(AuthGuard)
  // @Roles(Role.ADMIN)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.roleService.findOne(+id);
  }

  // @UseGuards(AuthGuard)
  // @Roles(Role.ADMIN)
  @Patch(":id")
  update(@Param("id") id: string, @Body() updateRoleDto: UpdateRoleDto) {
    console.log(id);

    return this.roleService.update(+id, updateRoleDto);
  }

  // @UseGuards(AuthGuard)
  // @Roles(Role.ADMIN)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.roleService.remove(+id);
  }
}

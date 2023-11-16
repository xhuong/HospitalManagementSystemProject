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
import { DepartmentService } from "./department.service";
import { CreateDepartmentDto } from "./dto/create-department.dto";
import { UpdateDepartmentDto } from "./dto/update-department.dto";
import { AuthGuard } from "src/auth/auth.guard";

@Controller("department")
export class DepartmentController {
  constructor(private readonly departmentService: DepartmentService) {}

  // @UseGuards(AuthGuard)
  @Post()
  create(@Body() createDepartmentDto: CreateDepartmentDto) {
    return this.departmentService.create(createDepartmentDto);
  }

  // @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.departmentService.findAll();
  }

  // @UseGuards(AuthGuard)
  @Get(":id")
  findOne(@Param("id") id: string) {
    return this.departmentService.findOne(+id);
  }

  // @UseGuards(AuthGuard)
  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updateDepartmentDto: UpdateDepartmentDto,
  ) {
    return this.departmentService.update(+id, updateDepartmentDto);
  }

  // @UseGuards(AuthGuard)
  @Delete(":id")
  remove(@Param("id") id: string) {
    return this.departmentService.remove(+id);
  }
}

import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Res,
} from "@nestjs/common";
import { PharmacistService } from "./pharmacist.service";
import { CreatePharmacistDto } from "./dto/create-pharmacist.dto";
import { UpdatePharmacistDto } from "./dto/update-pharmacist.dto";
import { Response } from "express";

@Controller("pharmacist")
export class PharmacistController {
  constructor(private readonly pharmacistService: PharmacistService) {}

  @Post("find-pharmacist")
  findOne(
    @Body("identification_code") identification_code: string,
    @Res() response: Response,
  ) {
    return this.pharmacistService.findOne(identification_code, response);
  }

  @Post("create-pharmacist")
  create(
    @Body() createPharmacistDto: CreatePharmacistDto,
    @Res() response: Response,
  ) {
    return this.pharmacistService.create(createPharmacistDto, response);
  }

  @Get()
  findAll(@Res() response: Response) {
    return this.pharmacistService.findAll(response);
  }

  @Patch(":id")
  update(
    @Param("id") id: string,
    @Body() updatePharmacistDto: UpdatePharmacistDto,
    @Res() response: Response,
  ) {
    return this.pharmacistService.update(+id, updatePharmacistDto, response);
  }

  @Delete(":id")
  remove(@Param("id") id: string, @Res() response: Response) {
    return this.pharmacistService.remove(+id, response);
  }
}

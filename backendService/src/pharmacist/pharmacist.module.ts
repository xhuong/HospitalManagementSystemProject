import { Module } from "@nestjs/common";
import { PharmacistService } from "./pharmacist.service";
import { PharmacistController } from "./pharmacist.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [PharmacistController],
  imports: [PrismaModule],
  providers: [PharmacistService],
})
export class PharmacistModule {}

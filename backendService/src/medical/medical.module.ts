import { Module } from "@nestjs/common";
import { MedicalService } from "./medical.service";
import { MedicalController } from "./medical.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [MedicalController],
  providers: [MedicalService],
  imports: [PrismaModule],
})
export class MedicalModule {}

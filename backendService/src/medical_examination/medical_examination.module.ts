import { Module } from "@nestjs/common";
import { MedicalExaminationService } from "./medical_examination.service";
import { MedicalExaminationController } from "./medical_examination.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [MedicalExaminationController],
  providers: [MedicalExaminationService],
  imports: [PrismaModule],
})
export class MedicalExaminationModule {}

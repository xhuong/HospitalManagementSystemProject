import { Module } from "@nestjs/common";
import { ServiceRelMedicalExaminationService } from "./service_rel_medical_examination.service";
import { ServiceRelMedicalExaminationController } from "./service_rel_medical_examination.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [ServiceRelMedicalExaminationController],
  providers: [ServiceRelMedicalExaminationService],
  imports: [PrismaModule],
})
export class ServiceRelMedicalExaminationModule {}

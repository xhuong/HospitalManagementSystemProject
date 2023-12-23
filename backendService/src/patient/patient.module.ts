import { Module } from "@nestjs/common";
import { PatientService } from "./patient.service";
import { PatientController } from "./patient.controller";
import { PrismaModule } from "src/prisma/prisma.module";
import { MedicalRecordService } from "src/medical_record/medical_record.service";

@Module({
  controllers: [PatientController],
  imports: [PrismaModule],
  providers: [PatientService, MedicalRecordService],
})
export class PatientModule {}

import { Module } from "@nestjs/common";
import { MedicalRecordService } from "./medical_record.service";
import { MedicalRecordController } from "./medical_record.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [MedicalRecordController],
  providers: [MedicalRecordService],
  imports: [PrismaModule],
})
export class MedicalRecordModule {}

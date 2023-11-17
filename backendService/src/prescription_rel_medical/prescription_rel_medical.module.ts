import { Module } from "@nestjs/common";
import { PrescriptionRelMedicalService } from "./prescription_rel_medical.service";
import { PrescriptionRelMedicalController } from "./prescription_rel_medical.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [PrescriptionRelMedicalController],
  providers: [PrescriptionRelMedicalService],
  imports: [PrismaModule],
})
export class PrescriptionRelMedicalModule {}

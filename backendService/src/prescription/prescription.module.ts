import { Module } from "@nestjs/common";
import { PrescriptionService } from "./prescription.service";
import { PrescriptionController } from "./prescription.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [PrescriptionController],
  providers: [PrescriptionService],
  imports: [PrismaModule],
})
export class PrescriptionModule {}

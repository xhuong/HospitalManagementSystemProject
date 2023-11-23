import { Module } from "@nestjs/common";
import { HealthInsuranceCardService } from "./health_insurance_card.service";
import { HealthInsuranceCardController } from "./health_insurance_card.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [HealthInsuranceCardController],
  providers: [HealthInsuranceCardService],
  imports: [PrismaModule],
})
export class HealthInsuranceCardModule {}

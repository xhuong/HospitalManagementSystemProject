import { Module } from "@nestjs/common";
import { AppointmentsService } from "./appointments.service";
import { AppointmentsController } from "./appointments.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [AppointmentsController],
  imports: [PrismaModule],
  providers: [AppointmentsService],
})
export class AppointmentsModule {}

import { Module } from "@nestjs/common";
import { BedService } from "./bed.service";
import { BedController } from "./bed.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [BedController],
  providers: [BedService],
  imports: [PrismaModule],
})
export class BedModule {}

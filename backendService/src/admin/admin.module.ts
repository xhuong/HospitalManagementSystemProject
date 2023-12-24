import { Module } from "@nestjs/common";
import { AdminService } from "./admin.service";
import { AdminController } from "./admin.controller";
import { PrismaModule } from "src/prisma/prisma.module";

@Module({
  controllers: [AdminController],
  imports: [PrismaModule],
  providers: [AdminService],
})
export class AdminModule {}

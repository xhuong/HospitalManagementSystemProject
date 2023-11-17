import { Module, NestModule, MiddlewareConsumer } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { DatabaseModule } from "./database/database.module";
import { RoleModule } from "./role/role.module";
import { PrismaModule } from "./prisma/prisma.module";
import { APP_INTERCEPTOR } from "@nestjs/core";
import { ResponseInterceptor } from "./interceptors/response.interceptor";
import { DepartmentModule } from "./department/department.module";
import { RoomModule } from "./room/room.module";
import { HealthInsuranceCardModule } from "./health_insurance_card/health_insurance_card.module";
import { RBACMiddleware } from "./middleware/RBACMiddleware/rbac.middleware";
import { MedicalRecordModule } from "./medical_record/medical_record.module";

@Module({
  imports: [
    UsersModule,
    AuthModule,
    DatabaseModule,
    RoleModule,
    PrismaModule,
    DepartmentModule,
    RoomModule,
    HealthInsuranceCardModule,
    MedicalRecordModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(RBACMiddleware).forRoutes("user");
  }
}

import {
  Module,
  // NestModule,
  // RequestMethod,
  // MiddlewareConsumer,
} from "@nestjs/common";
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
// import { TimeoutMiddleWare } from "./middleware/TimeoutMiddleWare/timeout.middleware";

@Module({
  imports: [
    UsersModule,
    AuthModule,
    DatabaseModule,
    RoleModule,
    PrismaModule,
    DepartmentModule,
    RoomModule,
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
export class AppModule {}

// implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer
//       .apply(TimeoutMiddleWare)
//       .forRoutes(
//         { path: "user", method: RequestMethod.GET },
//         { path: "user", method: RequestMethod.POST },
//       );
//   }
// }

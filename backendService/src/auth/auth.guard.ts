import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { Request } from "express";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private jwtService: JwtService) {}
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = this.extractTokenFromHeader(request);
    if (!token) {
      throw new UnauthorizedException();
    }
    try {
      const payload = await this.jwtService.verifyAsync(token, {
        secret: jwtConstants.secret,
      });
      request["user"] = payload;
    } catch {
      throw new UnauthorizedException();
    }
    return true;
  }

  private extractTokenFromHeader(request: Request): string | undefined {
    const [type, token] = request.headers.authorization?.split(" ") ?? [];

    const decodeJwtAccessToken = this.jwtService.decode(token);
    // const payload = request.headers.authorization?.split(" ")[1] ?? [];
    // console.log("request.headers.authorization", request.headers.authorization);
    // console.log("payload", payload);
    console.log("decodeJwtAccessToken", decodeJwtAccessToken);
    return type === "Bearer" ? token : undefined;
  }

  // private extractUserInformationFromHeader(request: Request):string | undefined {
  //   const
  // }
}

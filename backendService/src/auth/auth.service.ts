import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  roles = ["ADMIN", "DOCTOR", "PHARMACIST", "NURSE", "PATIENT"];

  async signIn(identificationCode: string, password: string) {
    try {
      const data = await this.prisma.user.findUnique({
        where: { identificationCode: identificationCode },
      });
      if (!data) {
        return {
          message:
            "Signed in failed, please check your identification code or password",
        };
      }
      if (data) {
        if (data.password === password) {
          const payload = {
            sub: password,
            identificationCode: data.identificationCode,
            role: this.roles[data.id_role - 1],
          };
          return {
            message: "Signed in successfully",
            data: {
              access_token: await this.jwtService.signAsync(payload),
            },
          };
        } else {
          return {
            message: "Signed in failed, the password is incorrect",
          };
        }
      }
    } catch {
      throw UnauthorizedException;
    }
  }
}

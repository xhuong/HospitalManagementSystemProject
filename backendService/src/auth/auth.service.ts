import { Injectable, UnauthorizedException } from "@nestjs/common";
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";
import { PrismaService } from "src/prisma/prisma.service";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
    private prisma: PrismaService,
  ) {}

  roles = ["ADMIN", "DOCTOR", "PHARMACIST", "NURSE", "PATIENT"];

  async signIn(phoneNumber: string, password: string) {
    try {
      const data = await this.prisma.user.findFirst({
        where: { phone_number: phoneNumber },
      });
      if (!data) {
        return {
          message: "Signed in failed, please check your username or password",
        };
      }
      if (data) {
        if (data.password === password) {
          console.log("data.user_name", data.user_name);

          const payload = {
            sub: password,
            username: data.user_name,
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

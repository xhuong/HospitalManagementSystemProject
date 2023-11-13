import {
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Body,
  UseGuards,
  Request,
  Get,
} from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";

@Controller("auth")
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post("login")
  signIn(@Body() signInDto: Record<string, any>) {
    console.log(signInDto.username, signInDto.password);
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get("profile")
  getProfile(@Request() req) {
    return req.user;
  }
}

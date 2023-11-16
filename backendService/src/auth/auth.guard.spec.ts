import { JwtService } from "@nestjs/jwt";
import { AuthGuard } from "./auth.guard";

describe("AuthGuard", () => {
  it("should be defined", () => {
    const jwtService = new JwtService();
    expect(new AuthGuard(jwtService)).toBeDefined();
  });
});

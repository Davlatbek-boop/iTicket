import { Module } from "@nestjs/common";
import { AuthService } from "./adminAuth/auth.service";
import { AuthController } from "./adminAuth/auth.controller";
import { JwtModule } from "@nestjs/jwt";
import { AdminModule } from "../admin/admin.module";
import { CustomerModule } from "../customer/customer.module";
import { CustomerAuthController } from "./customerAuth/auth.controller";
import { CustomerAuthService } from "./customerAuth/auth.service";

@Module({
  imports: [JwtModule.register({ global: true }), AdminModule, CustomerModule],
  controllers: [AuthController, CustomerAuthController],
  providers: [AuthService, CustomerAuthService],
})
export class AuthModule {}

import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  Res,
} from "@nestjs/common";
import { Request, Response } from "express";
import { LoginCustomerDto } from "../../customer/dto/login-cusotmer.dto";
import { CustomerAuthService } from "./auth.service";

@Controller("auth/customer")
export class CustomerAuthController {
  constructor(private readonly customerAuthService: CustomerAuthService) {}

  @Post("login")
  @HttpCode(200)
  async loginCustomer(
    @Body() loginCustomerDto: LoginCustomerDto,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.customerAuthService.loginCustomer(loginCustomerDto, res);
  }

  @Post("refresh-token")
  async refreshToken(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.customerAuthService.refreshToken(req, res);
  }

  @Get("logout")
  async logoutCustomer(
    @Req() req: Request,
    @Res({ passthrough: true }) res: Response
  ) {
    return this.customerAuthService.logoutCustomer(req, res);
  }
}

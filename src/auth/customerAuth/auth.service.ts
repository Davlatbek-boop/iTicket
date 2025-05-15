import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import * as bcrypt from "bcrypt";
import { Request, Response } from "express";
import { CustomerService } from "../../customer/customer.service";
import { CustomerDocument } from "../../customer/schemas/customer.schema";
import { LoginCustomerDto } from "../../customer/dto/login-cusotmer.dto";

@Injectable()
export class CustomerAuthService {
  constructor(
    private readonly customerService: CustomerService,
    private readonly jwtService: JwtService
  ) {}

  async generateToken(customer: CustomerDocument) {
    const payload = {
      id: customer._id,
      customername: customer.first_name,
      email: customer.email,
      is_creator: customer.gender,
    };

    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.ACCESS_TOKEN_KEY,
      expiresIn: process.env.ACCESS_TOKEN_TIME,
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.REFRESH_TOKEN_KEY,
      expiresIn: process.env.REFRESH_TOKEN_TIME,
    });

    return { accessToken, refreshToken };
  }

  async loginCustomer(loginCustomerDto: LoginCustomerDto, res: Response) {
    const customer = await this.customerService.findByEmail(
      loginCustomerDto.email
    );

    if (!customer) {
      throw new UnauthorizedException("email yoki parol xato");
    }

    const validPassword = await bcrypt.compare(
      loginCustomerDto.password,
      customer.hashed_password
    );

    if (!validPassword) {
      throw new UnauthorizedException("email yoki parol xato");
    }

    const tokens = await this.generateToken(customer);

    res.cookie("refresh-token-customer", tokens.refreshToken, {
      httpOnly: true,
      maxAge: Number(process.env.REFRESH_COOKIE_TIME),
    });

    const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);

    customer.hashed_refresh_token = hashed_refresh_token;
    await customer.save();

    return {
      message: "customer logged successfully",
      token: tokens.accessToken,
    };
  }

  async logoutCustomer(req: Request, res: Response) {
    const cookieRefreshToken = req.cookies["refresh-token-customer"];

    if (!cookieRefreshToken) {
      throw new UnauthorizedException("Cookie da refresh token topilmadi");
    }

    const payload = await this.jwtService.decode(cookieRefreshToken);

    if (!payload) {
      throw new UnauthorizedException("Refresh token xato");
    }

    const customer = await this.customerService.findByEmail(payload.email);

    if (!customer) {
      throw new BadRequestException(
        "Bunday refresh tokenli foydalanuvchi topilmadi"
      );
    }

    res.clearCookie("refresh-token-customer", {
      httpOnly: true,
    });

    customer.hashed_refresh_token = "";
    await customer.save();

    return {
      message: "customer logged out",
    };
  }

  async refreshToken(req: Request, res: Response) {
    const cookieRefreshToken = req.cookies["refresh-token-customer"];

    if (!cookieRefreshToken) {
      throw new UnauthorizedException("Cookie da refresh token topilmadi");
    }

    const payload = await this.jwtService.decode(cookieRefreshToken);

    if (!payload) {
      throw new UnauthorizedException("Refresh token xato");
    }

    const customer = await this.customerService.findByEmail(payload.email);

    if (!customer) {
      throw new BadRequestException(
        "Bunday refresh tokenli foydalanuvchi topilmadi"
      );
    }

    const tokens = await this.generateToken(customer);

    res.cookie("refresh-token-customer", tokens.refreshToken, {
      httpOnly: true,
      maxAge: Number(process.env.REFRESH_COOKIE_TIME),
    });

    const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);

    customer.hashed_refresh_token = hashed_refresh_token;
    await customer.save();

    return {
      message: "Refresh token yangilandi",
      token: tokens.accessToken,
    };
  }
}

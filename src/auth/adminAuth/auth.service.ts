import {
  BadRequestException,
  Injectable,
  UnauthorizedException,
} from "@nestjs/common";
import { AdminDocument } from "../../admin/schemas/admin.schema";
import { JwtService } from "@nestjs/jwt";
import { LoginAdmimDto } from "../../admin/dto/login-admin.dto";
import { AdminService } from "../../admin/admin.service";
import * as bcrypt from "bcrypt";
import { Request, Response } from "express";
import { access } from "fs";

@Injectable()
export class AuthService {
  constructor(
    private readonly adminService: AdminService,
    private readonly jwtService: JwtService
  ) {}

  async generateToken(admin: AdminDocument) {
    const payload = {
      id: admin._id,
      adminname: admin.name,
      email: admin.email,
      is_creator: admin.is_creator,
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

  async loginAdmin(loginAdminDto: LoginAdmimDto, res: Response) {
    const admin = await this.adminService.findByEmail(loginAdminDto.email);

    if (!admin) {
      throw new UnauthorizedException("email yoki parol xato");
    }

    const validPassword = await bcrypt.compare(
      loginAdminDto.password,
      admin.hashed_password
    );

    if (!validPassword) {
      throw new UnauthorizedException("email yoki parol xato");
    }

    const tokens = await this.generateToken(admin);

    res.cookie("refresh-token-admin", tokens.refreshToken, {
      httpOnly: true,
      maxAge: Number(process.env.REFRESH_COOKIE_TIME),
    });

    const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);

    admin.hashed_refresh_token = hashed_refresh_token;
    await admin.save();

    return {
      message: "admin logged successfully",
      token: tokens.accessToken,
    };
  }

  async logoutAdmin(req: Request, res: Response) {
    const cookieRefreshToken = req.cookies["refresh-token-admin"];

    if (!cookieRefreshToken) {
      throw new UnauthorizedException("Cookie da refresh token topilmadi");
    }

    const payload = await this.jwtService.decode(cookieRefreshToken);

    if (!payload) {
      throw new UnauthorizedException("Refresh token xato");
    }

    const admin = await this.adminService.findByEmail(payload.email);

    if (!admin) {
      throw new BadRequestException(
        "Bunday refresh tokenli foydalanuvchi topilmadi"
      );
    }

    res.clearCookie("refresh-token-admin", {
      httpOnly: true,
    });

    admin.hashed_refresh_token = "";
    await admin.save();

    return {
      message: "admin logged out",
    };
  }

  async refreshToken(req: Request, res: Response) {
    const cookieRefreshToken = req.cookies["refresh-token-admin"];

    if (!cookieRefreshToken) {
      throw new UnauthorizedException("Cookie da refresh token topilmadi");
    }

    const payload = await this.jwtService.decode(cookieRefreshToken);

    if (!payload) {
      throw new UnauthorizedException("Refresh token xato");
    }

    const admin = await this.adminService.findByEmail(payload.email);

    if (!admin) {
      throw new BadRequestException(
        "Bunday refresh tokenli foydalanuvchi topilmadi"
      );
    }

    const tokens = await this.generateToken(admin);

    res.cookie("refresh-token-admin", tokens.refreshToken, {
      httpOnly: true,
      maxAge: Number(process.env.REFRESH_COOKIE_TIME),
    });

    const hashed_refresh_token = await bcrypt.hash(tokens.refreshToken, 7);

    admin.hashed_refresh_token = hashed_refresh_token;
    await admin.save();

    return {
      message: "Refresh token yangilandi",
      token: tokens.accessToken,
    };
  }
}

import { Controller, Post, HttpCode, Body } from '@nestjs/common';
import {AuhtDto} from "./dto/auth.dto";

@Controller('auth')
export class AuthController {

  @Post('register')
  async register(@Body() dto: AuhtDto) {

  }

  @HttpCode(200)
  @Post('login                ')
  async login(@Body() dto: AuhtDto) {

  }
}

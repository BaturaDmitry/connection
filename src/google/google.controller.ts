
  
import { Controller, Get, UseGuards, Req } from '@nestjs/common';
import { GoogleService } from './google.service';
import { AuthGuard } from '@nestjs/passport';

@Controller()
export class GoogleController {
  constructor(private readonly googleService: GoogleService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  async googleAuth(@Req() req) {}

  @Get('/auth/google')
  @UseGuards(AuthGuard('google'))
  googleAuthRedirect(@Req() req) {
    return this.googleService.googleLogin(req);
  }
}
/*import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { LocalAuthGuard } from './auth/guards/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}*/
import { Controller, Get, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('Home')
  getHello() {
    return { message: 'NestJS ❤ Svelte' };
  }
  @Get('/about')
  @Render('About')
  getAbout() {
    return { message: 'NestJS ❤ Svelte' };
  }

}
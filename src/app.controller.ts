import { Controller, Get, Req, UnauthorizedException } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Req() request: Request): string {
    const authHeader = request.headers['authorization'];
    if (authHeader !== 'Bearer secret') {
      throw new UnauthorizedException('Invalid authorization header');
    }
    return this.appService.getHello();
  }
}

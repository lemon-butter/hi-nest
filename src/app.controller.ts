import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //데코레이터 -> string을 리턴하는 getHello
  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

import { Body, Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('/get-templates')
  getTemplates() {
    // console.log('/get-templates');
    return this.appService.getTemplates();
  }

  @Post('/get-images')
  getImages(@Body() body): string {
    // console.log('/get-images', body.name);
    return this.appService.getImages(body?.name);
  }
}

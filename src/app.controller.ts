import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

/**
 * Controller
 * 形式的には、@Controller() デコレータを適用したクラスのこと
 * 指定したパスでリクエストを受け取りレスポンスを返すことが役割
 * Provider が提供するサービスを利用する
 * 特定の Module に属する
 * $ nest g controller <name>
 */
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

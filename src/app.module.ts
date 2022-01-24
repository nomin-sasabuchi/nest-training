import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'; //追加！

/**
 * Module
 *  形式的には、@Module() デコレータを適用したクラスのこと
 *
 *  以下の要素から構成される:
 * providers: Nest injector によりインスタンス化される Providerで、 Module 内でシェアされる
 *  controllers: Module で定義される Controller
 *  imports: Module で使用する Provider をエクスポートしている他の Module
 *  exports: Module からエクスポートされる Provider
    Nest アプリケーションは、少なくとも一つの Module (これを Root  module という) を必要とし、これと他のインポートされた Module の連鎖である application graph によって構成される
 *  特定の役割に応じて一つの Module が構成されるべきである
 *  @Global() デコレータを適用した Module は、グローバルに利用可能となる
 *  動的に使用する Provider を切り替えることも可能
 *  $ nest g module <name>
  * 
 */
@Module({
  imports: [TypeOrmModule.forRoot()], //追加！
  // Controller の登録
  controllers: [AppController],
  // Service の登録
  providers: [AppService],
})
export class AppModule {}

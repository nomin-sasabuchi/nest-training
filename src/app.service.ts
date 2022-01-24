import { Injectable } from '@nestjs/common';

/**
 * Provider
 * 形式的には、@Injectable() デコレータを適用したクラスのこと
 * 依存する対象 (Dependency) を注入 (inject) する
 * Controller から、複雑なタスクを依頼される
 * $ nest g service <name>
 */
@Injectable()// @Injectable() デコレータの適用
export class AppService {
  getHello(): string {
    // サービスが提供するビジネスロジックを定義
    return 'Hello World!';
  }
}

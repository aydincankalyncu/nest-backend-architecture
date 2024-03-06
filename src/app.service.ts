import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';


@Injectable()
export class AppService {
  constructor(private configService: ConfigService){}
  getHello(): string {
    const test = this.configService.get<string>("db.mongo.url");
    console.log(test);
    return 'Hello World!';
  }
}

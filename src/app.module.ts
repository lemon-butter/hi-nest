import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

//데코레이터 -> 클레스에 함수기능을 추가 할 수 있음
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})

//앱모듈은 비어있지만 진짜는 모듈(데코레이터)에 있음
export class AppModule {}

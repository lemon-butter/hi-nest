import { Module } from '@nestjs/common';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';

//데코레이터 -> 클레스에 함수기능을 추가 할 수 있음
@Module({
  imports: [],
  controllers: [MoviesController],
  providers: [MoviesService],
})

//앱모듈은 비어있지만 진짜는 모듈(데코레이터)에 있음
export class AppModule {}

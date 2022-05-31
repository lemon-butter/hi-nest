import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}

//메인에서 시작해서 -> 모듈 -> 서비스 -> 컨트롤러

bootstrap();

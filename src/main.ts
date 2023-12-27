import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Validator에 도달하기 전에 금지
      forbidNonWhitelisted: true, // 이상한갓을 보내면 리퀘스트 자체를 금지
      transform: true, // get으로 보낸건 string이기 때문에 형태변환을 자동으로 하게끔 하는 것
    }),
  );
  await app.listen(3000);
}
bootstrap();

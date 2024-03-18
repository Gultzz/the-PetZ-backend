import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as cookieParser from 'cookie-parser';
import * as dotenv from 'dotenv';
import { AppModule } from './app.module';
dotenv.config();
const port = 3000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(cookieParser());
  app.enableCors();
  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api');
  await app.listen(port, () => {
    console.log(
      `Servidor aberto na porta ${port}. http://localhost:${port}/api`,
    );
  });
}
bootstrap();

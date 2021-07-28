import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
require('dotenv').config();

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.MONGO_URL);
  await app.listen(8080);
}
bootstrap();
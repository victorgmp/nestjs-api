import { NestFactory } from '@nestjs/core';
import { config as configEnv } from 'dotenv';
configEnv();

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors();
  await app.listen(process.env.PORT || '5000');
}
bootstrap();

import { NestFactory } from '@nestjs/core';
import { config as configEnv } from 'dotenv';

import { AppModule } from './app.module';

async function bootstrap() {
  configEnv();
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT || 5000);
}
bootstrap();

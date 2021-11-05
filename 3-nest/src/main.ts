import { NestFactory } from '@nestjs/core';
import { REFUSED } from 'dns';
import { AppModule } from './app.module';
import * as admin from 'firebase-admin';
const DB_CREDENTIALS = require("../my-key.json");
async function bootstrap() {
  admin.initializeApp({
    credential:admin.credential.cert(DB_CREDENTIALS),
  });
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();

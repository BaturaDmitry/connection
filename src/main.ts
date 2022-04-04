import 'svelte/register';

import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import { svelteViewEngine } from './svelte-view-engine';
import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {  
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.engine('svelte', svelteViewEngine);
  app.setViewEngine('svelte');  
  const config: ConfigService = app.get(ConfigService);
  const port: number = config.get<number>('PORT');

  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  
  await app.listen(port, () => {
    console.log('[WEB]', `http://localhost:${port}`);
  });
  Logger.log(`server listening: ${await app.getUrl()}`)
}
bootstrap();

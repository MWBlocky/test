import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as path from 'path';
import * as express from 'express';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');

  const config = new DocumentBuilder()
    .setTitle('Cats example')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();
  const document = SwaggerModule.createDocument(app, config);

  const swaggerUiDistPath = path.join(
    __dirname,
    '..',
    'node_modules',
    'swagger-ui-dist',
  );
  app.use('/swagger-static', express.static(swaggerUiDistPath));

  // Swagger UI
  app.use('/api', express.static(swaggerUiDistPath, { index: false }));
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

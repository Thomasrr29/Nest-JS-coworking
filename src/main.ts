import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
  .setTitle('API de Coworking')
  .setDescription('Documentación de la API del sistema de Coworking')
  .setVersion('1.0')
  .addTag('coworking')
  .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);


  await app.listen(3000);
}
bootstrap();

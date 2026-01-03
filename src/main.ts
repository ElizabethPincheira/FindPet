
import { ClassSerializerInterceptor, ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,           // elimina campos que no existen en el DTO
      forbidNonWhitelisted: true // error si mandan campos extra
    }),
  );


  app.useGlobalInterceptors(
  new ClassSerializerInterceptor(app.get(Reflector)),
);


  await app.listen(3000);
}
bootstrap();

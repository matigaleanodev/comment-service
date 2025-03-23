import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { microserviceConfig } from './config/microservice.config';
import { MicroserviceOptions } from '@nestjs/microservices';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    microserviceConfig,
  );

  await app.listen();
}
void bootstrap();

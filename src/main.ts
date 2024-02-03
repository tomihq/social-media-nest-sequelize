import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger, ValidationPipe } from '@nestjs/common';
import helmet from 'helmet';
import { getCorsDomains } from './common/helpers/get-cors-domains';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const logger = new Logger('main');
  app.setGlobalPrefix('api/v1');

  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  app.use(helmet());
  app.enableCors({
    origin: [...getCorsDomains()],
    credentials: true,
  });

  await app.listen(process.env.PORT);
  logger.log(`App running on PORT ${process.env.PORT}`);
}
bootstrap();

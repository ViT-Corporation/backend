import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { ErrorMiddleware } from './middleware/error.middleware';

async function bootstrap() {
   const app = await NestFactory.create(AppModule);
   // API prefix
   app.setGlobalPrefix('api')
   // Setup swagger
   const config = new DocumentBuilder()
      .setVersion('1.0')
      .setTitle('Netflix API documentation')
      .setDescription('This is documentation about API used for netflix client')
      .addBearerAuth()
      .addTag("Authentication", "This provides all api revelant to authentication")
      .build();
   const documentFactory = () => SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('doc', app, documentFactory)

   // Validation
   app.useGlobalPipes(new ValidationPipe());

   // Middleware
   app.use(new ErrorMiddleware().use)

   await app.listen(process.env.PORT ?? 3000);
}
bootstrap();

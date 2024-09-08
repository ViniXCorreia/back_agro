import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);

	const config = new DocumentBuilder()
		.setTitle('Backend Teste Agro')
		.setDescription('Backend Teste Agro')
		.setVersion('1.0')
		.addTag('backend-teste-agro')
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);

	app.enableCors();
	app.useGlobalPipes(new ValidationPipe());
	await app.listen(3000);
}
bootstrap();

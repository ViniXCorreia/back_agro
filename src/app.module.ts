import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DatabaseModule } from './infra/database/database.module';
import { RepositoryProxyModule } from './infra/database/proxy/repository.proxy.module';
import { AuthModule } from './_shared/auth/auth.module';
import { CropModule } from './_modules/crop/crop.module';
import { RuralProducerModule } from './_modules/rural-producer/rural_producer.module';
import { RuralProducerController } from './_modules/rural-producer/infra/rural_producer.controller';
import { CropController } from './_modules/crop/infra/crop.controller';
@Module({
	imports: [
		ConfigModule.forRoot({ isGlobal: true, envFilePath: './.env' }),
		DatabaseModule,
		RepositoryProxyModule,
		AuthModule,
		CropModule,
		RuralProducerModule,
	],
	controllers: [RuralProducerController, CropController],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { DynamicModule } from '@nestjs/common/interfaces';
import { DataSource } from 'typeorm';
import { DatabaseModule } from '../database.module';
import { DB_POSTGRES } from '../database.provider';
import { CropEntity } from '../entities/crop.entity';
import { RuralProducerEntity } from '../entities/rural_producer.entity';

@Module({
	imports: [DatabaseModule],
})
export class RepositoryProxyModule {
	static CROP_REPOSITORY = 'CropRepository';
	static RURAL_PRODUCER_REPOSITORY = 'RuralProducerRepostory';

	static register(): DynamicModule {
		return {
			module: RepositoryProxyModule,
			providers: [
				{
					provide: RepositoryProxyModule.CROP_REPOSITORY,
					useFactory: (dataSource: DataSource) =>
						dataSource.getRepository(CropEntity),
					inject: [DB_POSTGRES],
				},
				{
					provide: RepositoryProxyModule.RURAL_PRODUCER_REPOSITORY,
					useFactory: (dataSource: DataSource) =>
						dataSource.getRepository(RuralProducerEntity),
					inject: [DB_POSTGRES],
				},
			],
			exports: [
				RepositoryProxyModule.CROP_REPOSITORY,
				RepositoryProxyModule.RURAL_PRODUCER_REPOSITORY,
			],
		};
	}
}

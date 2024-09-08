import { Inject, Logger } from '@nestjs/common';
import { RuralProducerEntity } from 'src/infra/database/entities/rural_producer.entity';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { Repository } from 'typeorm';
import { ISoilUsageUseCase } from './soilUsageUseCase.interface';

export class SoilUsageUseCase implements ISoilUsageUseCase {
	logger = new Logger();

	constructor(
		@Inject(RepositoryProxyModule.RURAL_PRODUCER_REPOSITORY)
		private readonly ruralProducerRepository: Repository<RuralProducerEntity>
	) {}
	async execute(): Promise<any> {
		try {
			const result = await this.ruralProducerRepository
				.createQueryBuilder('ruralProducer')
				.select('SUM(ruralProducer.totalArea)', 'totalArea')
				.addSelect('SUM(ruralProducer.arableArea)', 'arableArea')
				.addSelect('SUM(ruralProducer.vegetationArea)', 'vegetationArea')
				.getRawOne();

			return result;
		} catch (error) {
			this.logger.error(JSON.stringify(error));
			throw error;
		}
	}
}

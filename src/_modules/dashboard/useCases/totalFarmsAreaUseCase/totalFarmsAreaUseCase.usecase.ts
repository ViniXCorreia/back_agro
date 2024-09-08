import { Inject, Logger } from '@nestjs/common';
import { RuralProducerEntity } from 'src/infra/database/entities/rural_producer.entity';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { Repository } from 'typeorm';
import { ITotalFarmsAreaUseCase } from './totalFarmsAreaUseCase.interface';

export class TotalFarmsAreaUseCase implements ITotalFarmsAreaUseCase {
	logger = new Logger();

	constructor(
		@Inject(RepositoryProxyModule.RURAL_PRODUCER_REPOSITORY)
		private readonly ruralProducerRepository: Repository<RuralProducerEntity>
	) {}

	async execute(): Promise<number> {
		try {
			const getTotalArea = await this.ruralProducerRepository
				.createQueryBuilder('rural_producer')
				.select('SUM(rural_producer.totalArea)', 'totalArea')
				.getRawOne();
			return getTotalArea.totalArea;
		} catch (error) {
			this.logger.error(JSON.stringify(error));
			throw error;
		}
	}
}

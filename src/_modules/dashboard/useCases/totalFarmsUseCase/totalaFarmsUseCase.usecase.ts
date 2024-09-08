import { Inject, Logger } from '@nestjs/common';
import { ITotalFarmsUseCase } from './totalFarmsUseCase.interface';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { RuralProducerEntity } from 'src/infra/database/entities/rural_producer.entity';
import { Repository } from 'typeorm';

export class TotalFarmsUseCase implements ITotalFarmsUseCase {
	logger = new Logger();
	constructor(
		@Inject(RepositoryProxyModule.RURAL_PRODUCER_REPOSITORY)
		private readonly ruralProducerRepository: Repository<RuralProducerEntity>
	) {}
	async execute(): Promise<number> {
		try {
			const count = await this.ruralProducerRepository.count();
			return count;
		} catch (error) {
			this.logger.error(JSON.stringify(error));
			throw error;
		}
	}
}

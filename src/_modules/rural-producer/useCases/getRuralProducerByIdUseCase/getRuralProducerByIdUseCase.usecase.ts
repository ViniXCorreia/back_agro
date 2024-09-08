import { Inject, Logger } from '@nestjs/common';
import { RuralProducerEntity } from 'src/infra/database/entities/rural_producer.entity';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { Repository } from 'typeorm';
import {
	IGetRuralProducerByIdDto,
	IGetRuralProducerByIdUseCase,
} from './getRuralProducerByIdUseCase.interface';

export class GetRuralProducerByIdUseCase
	implements IGetRuralProducerByIdUseCase
{
	logger = new Logger();

	constructor(
		@Inject(RepositoryProxyModule.RURAL_PRODUCER_REPOSITORY)
		private readonly ruralProducerRepository: Repository<RuralProducerEntity>
	) {}

	async execute(
		getRuralProducerByIdDto: IGetRuralProducerByIdDto
	): Promise<RuralProducerEntity> {
		try {
			const findRuralProducer = await this.ruralProducerRepository.findOne({
				where: {
					id: getRuralProducerByIdDto.id,
				},
				relations: ['farmCrops'],
			});

			if (!findRuralProducer) {
				throw new Error('400 - Essa produtor rural não existe!');
			}

			return findRuralProducer;
		} catch (error) {
			this.logger.error(JSON.stringify(error));
			throw error;
		}
	}
}

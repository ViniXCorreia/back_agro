import { Inject, Logger } from '@nestjs/common';
import {
	IDeleteRuralProducerDto,
	IDeleteRuralProducerUseCase,
} from './deleteRuralProducerUseCase.interface';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { RuralProducerEntity } from 'src/infra/database/entities/rural_producer.entity';
import { Repository } from 'typeorm';
import { OperationResultsDto } from 'src/_shared/protocols/dto/operationResults.dto';

export class DeleteRuralProducerUseCase implements IDeleteRuralProducerUseCase {
	logger = new Logger();
	constructor(
		@Inject(RepositoryProxyModule.RURAL_PRODUCER_REPOSITORY)
		private readonly ruralProducerRepository: Repository<RuralProducerEntity>
	) {}

	async execute(
		deleteRuralProducerDto: IDeleteRuralProducerDto
	): Promise<OperationResultsDto> {
		try {
			const findRuralProducer = await this.ruralProducerRepository.findOne({
				where: {
					id: deleteRuralProducerDto.id,
				},
			});
			if (!findRuralProducer) {
				throw new Error('400 - Essa produtor rural não existe!');
			}
			await this.ruralProducerRepository.remove(findRuralProducer);
			let results = new OperationResultsDto();
			results.success = true;
			results.message = 'Produtor rural deletado com sucesso!';
			return results;
		} catch (error) {
			this.logger.error(JSON.stringify(error));
			throw error;
		}
	}
}

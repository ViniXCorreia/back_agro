import { Inject, Logger } from '@nestjs/common';
import {
	IGetAllRuralProducersDto,
	IGetAllRuralProducersUseCase,
} from './getAllRuralProducerUseCase.interface';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { Repository } from 'typeorm';
import { RuralProducerEntity } from 'src/infra/database/entities/rural_producer.entity';
import { IReturnPaginatedDTO } from 'src/_shared/protocols/dto/returnPagination.dto';

export class GetAllRuralProducersUseCase
	implements IGetAllRuralProducersUseCase
{
	logger = new Logger();
	constructor(
		@Inject(RepositoryProxyModule.RURAL_PRODUCER_REPOSITORY)
		private readonly ruralProducerRepository: Repository<RuralProducerEntity>
	) {}
	async execute(
		getAllRuralProducersDto: IGetAllRuralProducersDto
	): Promise<IReturnPaginatedDTO<RuralProducerEntity>> {
		try {
			const take = getAllRuralProducersDto.paginationDto.pageSize || 10;
			const skip =
				getAllRuralProducersDto.paginationDto.pageNumber > 1
					? (getAllRuralProducersDto.paginationDto.pageNumber - 1) * take
					: 0;
			const order = getAllRuralProducersDto.paginationDto.orderBy || 'id';
			const direction =
				getAllRuralProducersDto.paginationDto.orderDirection || 'ASC';

			const [ruralProducers, total] =
				await this.ruralProducerRepository.findAndCount({
					take: take,
					skip: skip,
					order: {
						[order]: direction,
					},
					relations: ['farmCrops'],
				});
			return {
				data: ruralProducers,
				length: total,
			};
		} catch (error) {
			this.logger.error(JSON.stringify(error));
			throw error;
		}
	}
}

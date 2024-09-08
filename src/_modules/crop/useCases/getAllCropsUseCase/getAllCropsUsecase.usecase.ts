import { CropEntity } from 'src/infra/database/entities/crop.entity';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { Repository } from 'typeorm';
import {
	IGetAllCropsDto,
	IGetAllCropsUseCase,
} from './getAllCropsUseCase.interface';
import { Inject, Logger } from '@nestjs/common';
import { IReturnPaginatedDTO } from 'src/_shared/protocols/dto/returnPagination.dto';

export class GetAllCropsUseCase implements IGetAllCropsUseCase {
	logger = new Logger();
	constructor(
		@Inject(RepositoryProxyModule.CROP_REPOSITORY)
		private readonly cropRepository: Repository<CropEntity>
	) {}
	async execute(
		data: IGetAllCropsDto
	): Promise<IReturnPaginatedDTO<CropEntity>> {
		try {
			const take = data.paginationDto.pageSize || 10;
			const skip =
				data.paginationDto.pageNumber > 1
					? (data.paginationDto.pageNumber - 1) * take
					: 0;
			const order = data.paginationDto.orderBy || 'id';
			const direction = data.paginationDto.orderDirection || 'ASC';

			const [crops, total] = await this.cropRepository.findAndCount({
				take: take,
				skip: skip,
				order: {
					[order]: direction,
				},
			});
			return {
				data: crops,
				length: total,
			};
		} catch (error) {
			this.logger.error(JSON.stringify(error));
			throw error;
		}
	}
}

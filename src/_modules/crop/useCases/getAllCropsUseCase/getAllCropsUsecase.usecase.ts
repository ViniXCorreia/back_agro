import { CropEntity } from 'src/infra/database/entities/crop.entity';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { Repository } from 'typeorm';
import {
	IGetAllCropsDto,
	IGetAllCropsUseCase,
} from './getAllCropsUseCase.interface';
import { Inject, Logger } from '@nestjs/common';
import { ReturnPaginatedDTO } from 'src/_shared/protocols/dto/returnPagination.dto';

export class GetAllCropsUseCase implements IGetAllCropsUseCase {
	logger = new Logger();
	constructor(
		@Inject(RepositoryProxyModule.CROP_REPOSITORY)
		private readonly cropRepository: Repository<CropEntity>
	) {}
	async execute(
		getAllCropsDto: IGetAllCropsDto
	): Promise<ReturnPaginatedDTO<CropEntity>> {
		try {
			const take = getAllCropsDto.paginationDto.pageSize || 10;
			const skip =
				getAllCropsDto.paginationDto.pageNumber > 1
					? (getAllCropsDto.paginationDto.pageNumber - 1) * take
					: 0;
			const order = getAllCropsDto.paginationDto.orderBy || 'id';
			const direction = getAllCropsDto.paginationDto.orderDirection || 'ASC';

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

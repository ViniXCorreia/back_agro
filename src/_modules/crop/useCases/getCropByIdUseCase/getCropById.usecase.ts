import { Inject, Logger } from '@nestjs/common';
import { CropEntity } from 'src/infra/database/entities/crop.entity';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { Repository } from 'typeorm';
import { IGetCropByIdDto, IGetCropByIdUseCase } from './getCropById.interface';

export class GetCropByIdUseCase implements IGetCropByIdUseCase {
	logger = new Logger();
	constructor(
		@Inject(RepositoryProxyModule.CROP_REPOSITORY)
		private readonly cropRepository: Repository<CropEntity>
	) {}

	async execute(getCropByIdDto: IGetCropByIdDto): Promise<CropEntity> {
		try {
			const findCrop = await this.cropRepository.findOne({
				where: { id: getCropByIdDto.id },
			});
			if (!findCrop) {
				throw new Error('400 - Essa cultura não existe!');
			}
			return findCrop;
		} catch (error) {
			this.logger.error(JSON.stringify(error));
			throw error;
		}
	}
}

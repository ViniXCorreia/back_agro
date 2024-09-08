import { CropEntity } from 'src/infra/database/entities/crop.entity';
import { ICreateCropDto, ICreateCropUseCase } from './createCrop.interface';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { Inject, Logger } from '@nestjs/common';
import { ILike, Repository } from 'typeorm';

export class CreateCropUseCase implements ICreateCropUseCase {
	logger = new Logger();
	constructor(
		@Inject(RepositoryProxyModule.CROP_REPOSITORY)
		private readonly cropRepository: Repository<CropEntity>
	) {}
	async execute(createCropDto: ICreateCropDto): Promise<CropEntity> {
		try {
			const findCrop = await this.cropRepository.findOne({
				where: { crop: ILike(createCropDto.crop) },
			});
			if (findCrop) {
				throw new Error('400 - Essa cultura já esta cadastrada!');
			}
			createCropDto.crop = createCropDto.crop.toUpperCase();
			return await this.cropRepository.save(createCropDto);
		} catch (error) {
			this.logger.error(JSON.stringify(error));
			throw error;
		}
	}
}

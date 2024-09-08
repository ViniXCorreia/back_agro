import { Inject, Logger } from '@nestjs/common';
import { CropEntity } from 'src/infra/database/entities/crop.entity';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { Repository } from 'typeorm';
import {
	IDeleteCropDto,
	IDeleteCropUseCase,
} from './deleteCropUseCase.interface';

export class DeleteCropUseCase implements IDeleteCropUseCase {
	logger = new Logger();

	constructor(
		@Inject(RepositoryProxyModule.CROP_REPOSITORY)
		private readonly cropRepository: Repository<CropEntity>
	) {}
	async execute(deleteCropDto: IDeleteCropDto): Promise<boolean> {
		try {
			const findCrop = await this.cropRepository.findOneBy({
				id: deleteCropDto.id,
			});

			if (!findCrop) {
				throw new Error('400 - Essa cultura não existe!');
			}

			return await this.cropRepository
				.delete(deleteCropDto.id)
				.then(() => true);
		} catch (error) {
			this.logger.error(JSON.stringify(error));
			throw error;
		}
	}
}

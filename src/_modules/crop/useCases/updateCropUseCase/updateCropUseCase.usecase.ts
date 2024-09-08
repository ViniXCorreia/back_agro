import { Inject, Logger } from '@nestjs/common';
import {
	IUpdateCropDto,
	IUpdateCropUseCase,
} from './updateCropUseCase.interface';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { Repository } from 'typeorm';
import { CropEntity } from 'src/infra/database/entities/crop.entity';
import { OperationResultsDto } from 'src/_shared/protocols/dto/operationResults.dto';

export class UpdateCropUseCase implements IUpdateCropUseCase {
	logger = new Logger();

	constructor(
		@Inject(RepositoryProxyModule.CROP_REPOSITORY)
		private readonly cropRepository: Repository<CropEntity>
	) {}

	async execute(updateCropDto: IUpdateCropDto): Promise<OperationResultsDto> {
		try {
			const findCrop = await this.cropRepository.findOneBy({
				id: updateCropDto.id,
			});
			if (!findCrop) {
				throw new Error('400 - Essa cultura não existe!');
			}
			updateCropDto.updateCropDto.crop =
				updateCropDto.updateCropDto.crop.toUpperCase();
			const updateCrop = { ...findCrop, ...updateCropDto.updateCropDto };
			await this.cropRepository.save(updateCrop);
			let results = new OperationResultsDto();
			results.success = true;
			results.message = 'Cultura atualizada com sucesso!';
			return results;
		} catch (error) {
			this.logger.error(JSON.stringify(error));
			throw error;
		}
	}
}

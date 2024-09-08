import { CropEntity } from 'src/infra/database/entities/crop.entity';
import { ICreateCropDto, ICreateCropUseCase } from './createCrop.interface';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { Inject, Logger } from '@nestjs/common';
import { ILike, Repository } from 'typeorm';
import { OperationResultsDto } from 'src/_shared/protocols/dto/operationResults.dto';

export class CreateCropUseCase implements ICreateCropUseCase {
	logger = new Logger();
	constructor(
		@Inject(RepositoryProxyModule.CROP_REPOSITORY)
		private readonly cropRepository: Repository<CropEntity>
	) {}
	async execute(createCropDto: ICreateCropDto): Promise<OperationResultsDto> {
		try {
			const findCrop = await this.cropRepository.findOne({
				where: { crop: ILike(createCropDto.crop) },
			});
			if (findCrop) {
				throw new Error('400 - Essa cultura já esta cadastrada!');
			}
			createCropDto.crop = createCropDto.crop.toUpperCase();
			await this.cropRepository.save(createCropDto);
			let results = new OperationResultsDto();
			results.success = true;
			results.message = 'Cultura criada com sucesso!';
			return results;
		} catch (error) {
			this.logger.error(JSON.stringify(error));
			throw error;
		}
	}
}

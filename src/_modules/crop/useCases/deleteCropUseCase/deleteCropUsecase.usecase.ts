import { Inject, Logger } from '@nestjs/common';
import { CropEntity } from 'src/infra/database/entities/crop.entity';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { Repository } from 'typeorm';
import {
	IDeleteCropDto,
	IDeleteCropUseCase,
} from './deleteCropUseCase.interface';
import { OperationResultsDto } from 'src/_shared/protocols/dto/operationResults.dto';

export class DeleteCropUseCase implements IDeleteCropUseCase {
	logger = new Logger();

	constructor(
		@Inject(RepositoryProxyModule.CROP_REPOSITORY)
		private readonly cropRepository: Repository<CropEntity>
	) {}
	async execute(deleteCropDto: IDeleteCropDto): Promise<OperationResultsDto> {
		try {
			const findCrop = await this.cropRepository.findOneBy({
				id: deleteCropDto.id,
			});

			if (!findCrop) {
				throw new Error('400 - Essa cultura não existe!');
			}

			await this.cropRepository.delete(deleteCropDto.id).then(() => true);

			let results = new OperationResultsDto();
			results.success = true;
			results.message = 'Cultura deletada com sucesso!';
			return results;
		} catch (error) {
			this.logger.error(JSON.stringify(error));
			throw error;
		}
	}
}

import { Inject, Logger } from '@nestjs/common';
import { CropEntity } from 'src/infra/database/entities/crop.entity';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { Repository } from 'typeorm';
import { IDataForCropUseCase } from './dataForCropUseCase.inteface';
import { RuralProducerEntity } from 'src/infra/database/entities/rural_producer.entity';
import { CropsDataDto } from 'src/_modules/dashboard/infra/dto/cropsData.dto';
import { CropDataReturnDto } from 'src/_modules/dashboard/infra/dto/cropsDataReturn.dto';

export class DataForCropUseCase implements IDataForCropUseCase {
	logger = new Logger();

	constructor(
		@Inject(RepositoryProxyModule.CROP_REPOSITORY)
		private readonly cropRepository: Repository<CropEntity>,
		@Inject(RepositoryProxyModule.RURAL_PRODUCER_REPOSITORY)
		private readonly ruralProducerRepository: Repository<RuralProducerEntity>
	) {}
	async execute(): Promise<CropDataReturnDto> {
		try {
			let returnCropsData: CropDataReturnDto = new CropDataReturnDto();
			let identifiersCrops: CropsDataDto[] = [];
			const findCrops = await this.cropRepository.find();
			for (const crop of findCrops) {
				const findFarmsAndCrops = await this.ruralProducerRepository.find({
					where: {
						farmCrops: {
							id: crop.id,
						},
					},
					relations: ['farmCrops'],
				});
				let identifyCrop = new CropsDataDto();
				identifyCrop.name = crop.crop;
				identifyCrop.count = findFarmsAndCrops.length;
				identifiersCrops.push(identifyCrop);
			}
			returnCropsData.totalCrops = findCrops.length;
			returnCropsData.crops = identifiersCrops;
			return returnCropsData;
		} catch (error) {
			this.logger.error(JSON.stringify(error));
			throw error;
		}
	}
}

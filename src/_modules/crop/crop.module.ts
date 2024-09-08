import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { CropController } from './infra/crop.controller';
import { CropService } from './infra/crop.service';
import { Module } from '@nestjs/common';
import { CREATE_CROP_USE_CASE } from './useCases/createCropUseCase/createCrop.interface';
import { CreateCropUseCase } from './useCases/createCropUseCase/createCrop.usecase';
import { GET_CROP_BY_ID_USE_CASE } from './useCases/getCropByIdUseCase/getCropById.interface';
import { GetCropByIdUseCase } from './useCases/getCropByIdUseCase/getCropById.usecase';
import { GET_ALL_CROPS_USE_CASE } from './useCases/getAllCropsUseCase/getAllCropsUseCase.interface';
import { GetAllCropsUseCase } from './useCases/getAllCropsUseCase/getAllCropsUsecase.usecase';
import { DELETE_CROP_USE_CASE } from './useCases/deleteCropUseCase/deleteCropUseCase.interface';
import { DeleteCropUseCase } from './useCases/deleteCropUseCase/deleteCropUsecase.usecase';

@Module({
	imports: [RepositoryProxyModule.register()],
	controllers: [CropController],
	providers: [
		CropService,
		{
			provide: CREATE_CROP_USE_CASE,
			useClass: CreateCropUseCase,
		},
		{
			provide: GET_CROP_BY_ID_USE_CASE,
			useClass: GetCropByIdUseCase,
		},
		{
			provide: GET_ALL_CROPS_USE_CASE,
			useClass: GetAllCropsUseCase,
		},
		{
			provide: DELETE_CROP_USE_CASE,
			useClass: DeleteCropUseCase,
		},
	],
	exports: [CropService],
})
export class CropModule {}

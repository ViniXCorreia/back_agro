import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { DashboardController } from './infra/dashboard.controller';
import { DashboardService } from './infra/dashboard.service';
import { Module } from '@nestjs/common';
import { TotalFarmsUseCase } from './useCases/totalFarmsUseCase/totalaFarmsUseCase.usecase';
import { TOTAL_FARMS_USE_CASE } from './useCases/totalFarmsUseCase/totalFarmsUseCase.interface';
import { TOTAL_FARMS_AREA_USE_CASE } from './useCases/totalFarmsAreaUseCase/totalFarmsAreaUseCase.interface';
import { TotalFarmsAreaUseCase } from './useCases/totalFarmsAreaUseCase/totalFarmsAreaUseCase.usecase';
import { FarmsPerStateUseCase } from './useCases/farmsPerStateUseCase/farmsPerStateUseCase.usecase';
import { FARMS_PER_STATE_USE_CASE } from './useCases/farmsPerStateUseCase/farmsPerStateUseCase.interface';
import { DATA_FOR_CROP_USE_CASE } from './useCases/dataForCropUseCase/dataForCropUseCase.inteface';
import { DataForCropUseCase } from './useCases/dataForCropUseCase/dataForCropUseCase.usecase';
import { SOIL_USAGE_USE_CASE } from './useCases/soilUsageUseCase/soilUsageUseCase.interface';
import { SoilUsageUseCase } from './useCases/soilUsageUseCase/soilUsageUseCase.usecase';

@Module({
	imports: [RepositoryProxyModule.register()],
	controllers: [DashboardController],
	providers: [
		DashboardService,
		{
			provide: TOTAL_FARMS_USE_CASE,
			useClass: TotalFarmsUseCase,
		},
		{
			provide: TOTAL_FARMS_AREA_USE_CASE,
			useClass: TotalFarmsAreaUseCase,
		},
		{
			provide: FARMS_PER_STATE_USE_CASE,
			useClass: FarmsPerStateUseCase,
		},
		{
			provide: DATA_FOR_CROP_USE_CASE,
			useClass: DataForCropUseCase,
		},
		{
			provide: SOIL_USAGE_USE_CASE,
			useClass: SoilUsageUseCase,
		},
	],
	exports: [DashboardService],
})
export class DashboardModule {}

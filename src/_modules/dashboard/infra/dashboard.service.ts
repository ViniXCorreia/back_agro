import { HttpException, Inject, Injectable } from '@nestjs/common';
import {
	ITotalFarmsUseCase,
	TOTAL_FARMS_USE_CASE,
} from '../useCases/totalFarmsUseCase/totalFarmsUseCase.interface';
import {
	ITotalFarmsAreaUseCase,
	TOTAL_FARMS_AREA_USE_CASE,
} from '../useCases/totalFarmsAreaUseCase/totalFarmsAreaUseCase.interface';
import {
	FARMS_PER_STATE_USE_CASE,
	IFarmsPerStateUseCase,
} from '../useCases/farmsPerStateUseCase/farmsPerStateUseCase.interface';
import {
	DATA_FOR_CROP_USE_CASE,
	IDataForCropUseCase,
} from '../useCases/dataForCropUseCase/dataForCropUseCase.inteface';
import {
	ISoilUsageUseCase,
	SOIL_USAGE_USE_CASE,
} from '../useCases/soilUsageUseCase/soilUsageUseCase.interface';

@Injectable()
export class DashboardService {
	constructor(
		@Inject(TOTAL_FARMS_USE_CASE)
		private readonly totalFarmsUseCase: ITotalFarmsUseCase,
		@Inject(TOTAL_FARMS_AREA_USE_CASE)
		private readonly totalFarmsAreaUsecase: ITotalFarmsAreaUseCase,
		@Inject(FARMS_PER_STATE_USE_CASE)
		private readonly farmsPerStateUseCase: IFarmsPerStateUseCase,
		@Inject(DATA_FOR_CROP_USE_CASE)
		private readonly dataForCropUseCase: IDataForCropUseCase,
		@Inject(SOIL_USAGE_USE_CASE)
		private readonly soilUsageUseCase: ISoilUsageUseCase
	) {}

	async totalFarms() {
		try {
			return await this.totalFarmsUseCase.execute();
		} catch (error) {
			let [status, msg] = error.message.split('-');
			throw new HttpException(
				`${msg ?? 'Erro ao buscar de todas as fazendas!.'}`,
				+status
			);
		}
	}

	async totalFarmsArea() {
		try {
			return await this.totalFarmsAreaUsecase.execute();
		} catch (error) {
			let [status, msg] = error.message.split('-');
			throw new HttpException(
				`${msg ?? 'Erro ao buscar a área das fazendas!.'}`,
				+status
			);
		}
	}

	async farmsPerState() {
		try {
			return await this.farmsPerStateUseCase.execute();
		} catch (error) {
			let [status, msg] = error.message.split('-');
			throw new HttpException(
				`${msg ?? 'Erro ao buscar os dados das fazendas por estado!.'}`,
				+status
			);
		}
	}

	async dataForCrop() {
		try {
			return await this.dataForCropUseCase.execute();
		} catch (error) {
			let [status, msg] = error.message.split('-');
			throw new HttpException(
				`${msg ?? 'Erro ao buscar os dados das culturas!.'}`,
				+status
			);
		}
	}

	async soilUsage() {
		try {
			return await this.soilUsageUseCase.execute();
		} catch (error) {
			let [status, msg] = error.message.split('-');
			throw new HttpException(
				`${msg ?? 'Erro ao buscar os dados de ocupação do solo!.'}`,
				+status
			);
		}
	}
}

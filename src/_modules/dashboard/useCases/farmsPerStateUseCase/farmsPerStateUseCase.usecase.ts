import { Inject, Logger } from '@nestjs/common';
import { IFarmsPerStateUseCase } from './farmsPerStateUseCase.interface';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { Repository } from 'typeorm';
import { RuralProducerEntity } from 'src/infra/database/entities/rural_producer.entity';
import { FarmsPerStateDto } from '../../infra/dto/farmsPerState.dto';
import { FarmsPerStateReturnDto } from '../../infra/dto/farmsPerStateReturn.dto';

export class FarmsPerStateUseCase implements IFarmsPerStateUseCase {
	logger = new Logger();
	constructor(
		@Inject(RepositoryProxyModule.RURAL_PRODUCER_REPOSITORY)
		private readonly ruralProducerRepository: Repository<RuralProducerEntity>
	) {}
	async execute(): Promise<FarmsPerStateReturnDto> {
		try {
			const brasilStates: string[] = [
				'AC',
				'AL',
				'AP',
				'AM',
				'BA',
				'CE',
				'DF',
				'ES',
				'GO',
				'MA',
				'MT',
				'MS',
				'MG',
				'PA',
				'PB',
				'PR',
				'PE',
				'PI',
				'RJ',
				'RN',
				'RS',
				'RO',
				'RR',
				'SC',
				'SP',
				'SE',
				'TO',
			];

			const farmsPerStateFind = await this.ruralProducerRepository.find();

			let farmsPerState: FarmsPerStateDto[] = [];

			brasilStates.forEach(async (state) => {
				const farmsInState = farmsPerStateFind.filter(
					(farm) => farm.federalState === state
				);
				let farmState = new FarmsPerStateDto();
				farmState.state = state;
				farmState.count = farmsInState.length;
				farmState.data = farmsInState;
				farmsPerState.push(farmState);
			});

			let returnFarmsPerState = new FarmsPerStateReturnDto();
			returnFarmsPerState.totalProducer = farmsPerStateFind.length;
			returnFarmsPerState.data = farmsPerState;
			return returnFarmsPerState;
		} catch (error) {
			this.logger.error(JSON.stringify(error));
			throw error;
		}
	}
}

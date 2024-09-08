import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { Module } from '@nestjs/common';
import { RuralProducerController } from './infra/rural_producer.controller';
import { RuralProducerService } from './infra/rural_producer.service';
import { CREATE_RURAL_PRODUCER_USE_CASE } from './useCases/createRuralProducerUseCase/createRuralProducerUseCase.interface';
import { CreateRuralProducerUseCase } from './useCases/createRuralProducerUseCase/createRuralProducerUseCase.usecase';
import { GET_RURAL_PRODUCER_BY_ID_USE_CASE } from './useCases/getRuralProducerByIdUseCase/getRuralProducerByIdUseCase.interface';
import { GetRuralProducerByIdUseCase } from './useCases/getRuralProducerByIdUseCase/getRuralProducerByIdUseCase.usecase';
import { DELETE_RURAL_PRODUCER_USE_CASE } from './useCases/deleteRuralProducerUseCase/deleteRuralProducerUseCase.interface';
import { DeleteRuralProducerUseCase } from './useCases/deleteRuralProducerUseCase/deleteRuralProducerUseCase.usecase';
import { GetAllRuralProducersUseCase } from './useCases/getAllRuralProducersUseCase/getAllRuralProducerUseCase.usecase';
import { GET_ALL_RURAL_PRODUCERS_USE_CASE } from './useCases/getAllRuralProducersUseCase/getAllRuralProducerUseCase.interface';
import { UPDATE_RURAL_PRODUCER_USE_CASE } from './useCases/updateRuralProducerUseCase/updateRuralProducerUseCase.interface';
import { UpdateRuralProducerUseCase } from './useCases/updateRuralProducerUseCase/updateRuralProducerUseCase.usecase';

@Module({
	imports: [RepositoryProxyModule.register()],
	controllers: [RuralProducerController],
	providers: [
		RuralProducerService,
		{
			provide: CREATE_RURAL_PRODUCER_USE_CASE,
			useClass: CreateRuralProducerUseCase,
		},
		{
			provide: GET_RURAL_PRODUCER_BY_ID_USE_CASE,
			useClass: GetRuralProducerByIdUseCase,
		},
		{
			provide: GET_ALL_RURAL_PRODUCERS_USE_CASE,
			useClass: GetAllRuralProducersUseCase,
		},
		{
			provide: UPDATE_RURAL_PRODUCER_USE_CASE,
			useClass: UpdateRuralProducerUseCase,
		},
		{
			provide: DELETE_RURAL_PRODUCER_USE_CASE,
			useClass: DeleteRuralProducerUseCase,
		},
	],
	exports: [RuralProducerService],
})
export class RuralProducerModule {}

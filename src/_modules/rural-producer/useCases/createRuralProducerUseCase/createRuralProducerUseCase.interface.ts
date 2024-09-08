import { RuralProducerEntity } from 'src/infra/database/entities/rural_producer.entity';
import { CreateRuralProducerDto } from '../../infra/dto/createRuralProducer.dto';
import { OperationResultsDto } from 'src/_shared/protocols/dto/operationResults.dto';

export const CREATE_RURAL_PRODUCER_USE_CASE = 'CreateRuralProducerUseCase';

export interface ICreateRuralProducerDto {
	createRuralProducerDto: CreateRuralProducerDto;
}

export interface ICreateRuralProducerUseCase {
	execute(
		createRuralProducerDto: ICreateRuralProducerDto
	): Promise<OperationResultsDto>;
}

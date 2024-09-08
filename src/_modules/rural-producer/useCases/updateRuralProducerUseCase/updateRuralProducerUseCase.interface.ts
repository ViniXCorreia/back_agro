import { OperationResultsDto } from 'src/_shared/protocols/dto/operationResults.dto';
import { UpdateRuralProducerDto } from '../../infra/dto/updateRuralProducer.dto';

export const UPDATE_RURAL_PRODUCER_USE_CASE = 'UpdateRuralProducerUseCase';

export interface IUpdateRuralProducerDto {
	id: number;
	updateRuralProducerDto: UpdateRuralProducerDto;
}

export interface IUpdateRuralProducerUseCase {
	execute(
		updateRuralProducerDtodto: IUpdateRuralProducerDto
	): Promise<OperationResultsDto>;
}

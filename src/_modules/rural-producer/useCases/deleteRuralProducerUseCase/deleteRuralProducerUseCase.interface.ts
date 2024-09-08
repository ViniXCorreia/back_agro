import { OperationResultsDto } from 'src/_shared/protocols/dto/operationResults.dto';

export const DELETE_RURAL_PRODUCER_USE_CASE = 'DeleteRuralProducerUseCase';
export interface IDeleteRuralProducerDto {
	id: number;
}
export interface IDeleteRuralProducerUseCase {
	execute(
		deleteRuralProducerDto: IDeleteRuralProducerDto
	): Promise<OperationResultsDto>;
}

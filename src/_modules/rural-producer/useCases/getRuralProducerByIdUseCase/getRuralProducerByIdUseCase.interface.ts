import { RuralProducerEntity } from 'src/infra/database/entities/rural_producer.entity';

export const GET_RURAL_PRODUCER_BY_ID_USE_CASE = 'GetRuralProducerByIdUseCase';

export interface IGetRuralProducerByIdDto {
	id: number;
}

export interface IGetRuralProducerByIdUseCase {
	execute(
		getRuralProducerByIdDto: IGetRuralProducerByIdDto
	): Promise<RuralProducerEntity>;
}

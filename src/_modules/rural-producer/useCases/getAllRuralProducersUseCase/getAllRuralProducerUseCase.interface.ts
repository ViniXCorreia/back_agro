import { PaginationDto } from 'src/_shared/protocols/dto/pagination.dto';
import { IReturnPaginatedDTO } from 'src/_shared/protocols/dto/returnPagination.dto';
import { RuralProducerEntity } from 'src/infra/database/entities/rural_producer.entity';

export const GET_ALL_RURAL_PRODUCERS_USE_CASE = 'GetAllRuralProducersUseCase';

export interface IGetAllRuralProducersDto {
	paginationDto: PaginationDto;
}

export interface IGetAllRuralProducersUseCase {
	execute(
		getAllRuralProducersDto: IGetAllRuralProducersDto
	): Promise<IReturnPaginatedDTO<RuralProducerEntity>>;
}

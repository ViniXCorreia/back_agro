import { PaginationDto } from 'src/_shared/protocols/dto/pagination.dto';
import { IReturnPaginatedDTO } from 'src/_shared/protocols/dto/returnPagination.dto';
import { CropEntity } from 'src/infra/database/entities/crop.entity';

export const GET_ALL_CROPS_USE_CASE = 'GetAllCropsUseCase';

export interface IGetAllCropsDto {
	paginationDto: PaginationDto;
}

export interface IGetAllCropsUseCase {
	execute(
		getAllCropsDto: IGetAllCropsDto
	): Promise<IReturnPaginatedDTO<CropEntity>>;
}

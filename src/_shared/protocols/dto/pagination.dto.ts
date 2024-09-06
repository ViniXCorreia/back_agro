import { Transform } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class PaginationDto {
	@Transform(({ value }) => Number(value))
	@IsNumber()
	pageNumber?: number = 1;

	@Transform(({ value }) => Number(value))
	@IsNumber()
	pageSize?: number = 10;

	@IsString()
	orderBy?: string = 'id';

	@IsString()
	orderDirection?: string = 'ASC';
}

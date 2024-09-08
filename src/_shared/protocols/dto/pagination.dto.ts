import { ApiProperty } from '@nestjs/swagger';
import { Transform } from 'class-transformer';
import { IsNumber, IsString } from 'class-validator';

export class PaginationDto {
	@ApiProperty({ example: 1 })
	@Transform(({ value }) => Number(value))
	@IsNumber()
	pageNumber?: number = 1;

	@ApiProperty({ example: 10 })
	@Transform(({ value }) => Number(value))
	@IsNumber()
	pageSize?: number = 10;

	@ApiProperty({ example: 'id' })
	@IsString()
	orderBy?: string = 'id';

	@ApiProperty({ example: 'ASC' })
	@IsString()
	orderDirection?: string = 'ASC';
}

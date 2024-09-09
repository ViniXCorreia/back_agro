import { ApiProperty } from '@nestjs/swagger';

export class ReturnPaginatedDTO<T> {
	@ApiProperty()
	data: T[];

	@ApiProperty()
	length: number;
}

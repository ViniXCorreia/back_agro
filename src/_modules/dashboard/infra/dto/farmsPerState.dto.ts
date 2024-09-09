import { ApiProperty } from '@nestjs/swagger';

export class FarmsPerStateDto {
	@ApiProperty()
	state: string;

	@ApiProperty()
	count: number;
}

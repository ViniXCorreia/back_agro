import { ApiProperty } from '@nestjs/swagger';

export class CropsDataDto {
	@ApiProperty()
	name: string;

	@ApiProperty()
	count: number;
}

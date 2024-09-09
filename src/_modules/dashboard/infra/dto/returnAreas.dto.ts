import { ApiProperty } from '@nestjs/swagger';

export class ReturnAreasDto {
	@ApiProperty()
	totalArea: number;

	@ApiProperty()
	arableArea: number;

	@ApiProperty()
	vegetationArea: number;
}

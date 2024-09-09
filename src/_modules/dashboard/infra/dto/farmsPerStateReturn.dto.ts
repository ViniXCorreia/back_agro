import { ApiProperty } from '@nestjs/swagger';
import { FarmsPerStateDto } from './farmsPerState.dto';

export class FarmsPerStateReturnDto {
	@ApiProperty()
	totalProducer: number;

	@ApiProperty({ type: FarmsPerStateDto, isArray: true })
	data: FarmsPerStateDto[];
}

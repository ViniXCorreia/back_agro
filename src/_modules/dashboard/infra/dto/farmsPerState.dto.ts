import { ApiProperty } from '@nestjs/swagger';
import { RuralProducerEntity } from 'src/infra/database/entities/rural_producer.entity';

export class FarmsPerStateDto {
	@ApiProperty()
	state: string;

	@ApiProperty()
	count: number;
}

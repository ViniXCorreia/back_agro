import { RuralProducerEntity } from 'src/infra/database/entities/rural_producer.entity';

export class FarmsPerStateDto {
	state: string;
	count: number;
}

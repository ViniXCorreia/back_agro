import {
	IsNumber,
	IsString,
	Length,
	MaxLength,
	MinLength,
} from 'class-validator';
import { CropEntity } from 'src/infra/database/entities/crop.entity';

export class CreateRuralProducerDto {
	@IsString()
	@Length(11, 11)
	cpf: string;

	@IsString()
	@Length(14, 14)
	cnpj: string;

	@IsString()
	nameProducer: string;

	@IsString()
	farmName: string;

	@IsString()
	city: string;

	@IsString()
	federalState: string;

	@IsNumber()
	totalArea: number;

	@IsNumber()
	arableArea: number;

	@IsNumber()
	vegetationArea: number;

	farmCrops: CropEntity[];
}

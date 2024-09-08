import { ApiProperty } from '@nestjs/swagger';
import {
	IsNumber,
	IsString,
	Length,
	MaxLength,
	MinLength,
} from 'class-validator';
import { CreateCropDto } from 'src/_modules/crop/infra/dto/create_crop.dto';
import { CropEntity } from 'src/infra/database/entities/crop.entity';

export class CreateRuralProducerDto {
	@ApiProperty({ example: '12345678900' })
	@IsString()
	@Length(11, 11)
	cpf: string;

	@ApiProperty({ example: '12345678901234' })
	@IsString()
	@Length(14, 14)
	cnpj: string;

	@ApiProperty({ example: 'Fulano da Silva' })
	@IsString()
	nameProducer: string;

	@ApiProperty({ example: 'Fazenda Fulano da Silva' })
	@IsString()
	farmName: string;

	@ApiProperty({ example: 'Florianópolis' })
	@IsString()
	city: string;

	@ApiProperty({ example: 'SC' })
	@IsString()
	federalState: string;

	@ApiProperty({ example: 1000 })
	@IsNumber()
	totalArea: number;

	@ApiProperty({ example: 500 })
	@IsNumber()
	arableArea: number;

	@ApiProperty({ example: 500 })
	@IsNumber()
	vegetationArea: number;

	@ApiProperty({ type: CreateCropDto, isArray: true })
	farmCrops: CropEntity[];
}

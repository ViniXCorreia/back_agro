import { ApiProperty } from '@nestjs/swagger';
import { CropsDataDto } from './CropsData.dto';

export class CropDataReturnDto {
	@ApiProperty()
	totalCrops: number;

	@ApiProperty({ type: CropsDataDto, isArray: true })
	crops: CropsDataDto[];
}

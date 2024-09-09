import { ApiProperty } from '@nestjs/swagger';
import { CropsDataDto } from 'src/_modules/dashboard/infra/dto/cropsData.dto';

export class CropDataReturnDto {
	@ApiProperty()
	totalCrops: number;

	@ApiProperty({ type: CropsDataDto, isArray: true })
	crops: CropsDataDto[];
}

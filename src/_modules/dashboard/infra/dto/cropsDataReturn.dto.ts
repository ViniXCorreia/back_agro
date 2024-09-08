import { CropsDataDto } from './CropsData.dto';

export class CropDataReturnDto {
	totalCrops: number;
	crops: CropsDataDto[];
}

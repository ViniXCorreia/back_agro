import { CropDataReturnDto } from '../../infra/dto/cropsDataReturn.dto';

export const DATA_FOR_CROP_USE_CASE = 'DataForCropUseCase';

export interface IDataForCropUseCase {
	execute(): Promise<CropDataReturnDto>;
}

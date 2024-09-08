import { CropEntity } from 'src/infra/database/entities/crop.entity';

export const GET_CROP_BY_ID_USE_CASE = 'GetCropByIdUseCase';

export interface IGetCropByIdDto {
	id: number;
}

export interface IGetCropByIdUseCase {
	execute(id: IGetCropByIdDto): Promise<CropEntity>;
}

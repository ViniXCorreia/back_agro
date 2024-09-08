import { CropEntity } from 'src/infra/database/entities/crop.entity';

export const CREATE_CROP_USE_CASE = 'CreateCropUseCase';

export interface ICreateCropDto {
	crop: string;
}

export interface ICreateCropUseCase {
	execute(createCropDto: ICreateCropDto): Promise<CropEntity>;
}

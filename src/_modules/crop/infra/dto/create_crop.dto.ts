import { IsString } from 'class-validator';
import { ICreateCropDto } from '../../useCases/createCropUseCase/createCrop.interface';

export class CreateCropDto implements ICreateCropDto {
	@IsString()
	crop: string;
}

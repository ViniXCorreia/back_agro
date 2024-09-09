import { IsString } from 'class-validator';
import { ICreateCropDto } from '../../useCases/createCropUseCase/createCrop.interface';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCropDto implements ICreateCropDto {
	@ApiProperty({ example: 'Milho' })
	@IsString()
	crop: string;
}

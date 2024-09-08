import { IsString } from 'class-validator';
import { ICreateCropDto } from '../../useCases/createCropUseCase/createCrop.interface';
import { ApiProperty } from '@nestjs/swagger';

export class CreateCropDto implements ICreateCropDto {
	@ApiProperty({ example: 'Milho', description: 'Nome do cultivo' })
	@IsString()
	crop: string;
}

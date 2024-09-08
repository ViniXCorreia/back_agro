import { OperationResultsDto } from 'src/_shared/protocols/dto/operationResults.dto';

export const CREATE_CROP_USE_CASE = 'CreateCropUseCase';

export interface ICreateCropDto {
	crop: string;
}

export interface ICreateCropUseCase {
	execute(createCropDto: ICreateCropDto): Promise<OperationResultsDto>;
}

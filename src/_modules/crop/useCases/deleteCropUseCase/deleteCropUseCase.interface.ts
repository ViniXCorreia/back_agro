import { OperationResultsDto } from 'src/_shared/protocols/dto/operationResults.dto';

export const DELETE_CROP_USE_CASE = 'DeleteCropUseCase';

export interface IDeleteCropDto {
	id: number;
}

export interface IDeleteCropUseCase {
	execute(data: IDeleteCropDto): Promise<OperationResultsDto>;
}

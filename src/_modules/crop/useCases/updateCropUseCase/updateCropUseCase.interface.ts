import { OperationResultsDto } from 'src/_shared/protocols/dto/operationResults.dto';
import { UpdateCropDto } from '../../infra/dto/update_crop.dto';

export const UPDATE_CROP_USE_CASE = 'UpdateCropUseCase';

export interface IUpdateCropDto {
	id: number;
	updateCropDto: UpdateCropDto;
}

export interface IUpdateCropUseCase {
	execute(updateCropDto: IUpdateCropDto): Promise<OperationResultsDto>;
}

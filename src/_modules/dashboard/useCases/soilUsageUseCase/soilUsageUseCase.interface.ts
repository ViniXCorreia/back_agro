import { ReturnAreasDto } from '../../infra/dto/returnAreas.dto';

export const SOIL_USAGE_USE_CASE = 'SoilUsageUseCase';

export interface ISoilUsageUseCase {
	execute(): Promise<ReturnAreasDto>;
}

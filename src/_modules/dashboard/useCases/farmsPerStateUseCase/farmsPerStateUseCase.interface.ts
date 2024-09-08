import { FarmsPerStateReturnDto } from '../../infra/dto/farmsPerStateReturn.dto';

export const FARMS_PER_STATE_USE_CASE = 'FarmsPerStateUseCase';

export interface IFarmsPerStateUseCase {
	execute(): Promise<FarmsPerStateReturnDto>;
}

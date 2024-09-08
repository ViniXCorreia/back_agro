export const TOTAL_FARMS_USE_CASE = 'TotalFarmsUseCase';

export interface ITotalFarmsUseCase {
	execute(): Promise<number>;
}

export const TOTAL_FARMS_AREA_USE_CASE = 'TotalFarmsAreaUseCase';

export interface ITotalFarmsAreaUseCase {
	execute(): Promise<number>;
}

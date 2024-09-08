import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';

@Controller('dashboard')
export class DashboardController {
	constructor(private readonly dashboardService: DashboardService) {}

	@Get('totalFarms')
	async totalFarms() {
		return await this.dashboardService.totalFarms();
	}

	@Get('totalFarmsArea')
	async totalFarmsArea() {
		return await this.dashboardService.totalFarmsArea();
	}

	@Get('farmsPerState')
	async farmsPerState() {
		return await this.dashboardService.farmsPerState();
	}
}

import { Controller, Get } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { FarmsPerStateReturnDto } from './dto/farmsPerStateReturn.dto';
import { CropDataReturnDto } from './dto/cropsDataReturn.dto';
import { ReturnAreasDto } from './dto/returnAreas.dto';

@ApiTags('Dashboard')
@Controller('dashboard')
export class DashboardController {
	constructor(private readonly dashboardService: DashboardService) {}

	@ApiResponse({ status: 200, type: Number })
	@Get('totalFarms')
	async totalFarms() {
		return await this.dashboardService.totalFarms();
	}

	@ApiResponse({ status: 200, type: Number })
	@Get('totalFarmsArea')
	async totalFarmsArea() {
		return await this.dashboardService.totalFarmsArea();
	}

	@ApiResponse({ status: 200, type: FarmsPerStateReturnDto })
	@Get('farmsPerState')
	async farmsPerState() {
		return await this.dashboardService.farmsPerState();
	}

	@ApiResponse({ status: 200, type: CropDataReturnDto })
	@Get('dataForCrop')
	async dataForCrop() {
		return await this.dashboardService.dataForCrop();
	}

	@ApiResponse({ status: 200, type: ReturnAreasDto })
	@Get('soilUsage')
	async soilUsage() {
		return await this.dashboardService.soilUsage();
	}
}

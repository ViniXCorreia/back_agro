import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Post,
	Query,
	Request,
} from '@nestjs/common';
import { CropService } from './crop.service';
import { CreateCropDto } from './dto/create_crop.dto';
import { PaginationDto } from 'src/_shared/protocols/dto/pagination.dto';

@Controller('crop')
export class CropController {
	constructor(private readonly cropService: CropService) {}

	@Post('create')
	async createCrop(@Body() createCropDto: CreateCropDto) {
		return await this.cropService.createCrop(createCropDto);
	}

	@Get('all')
	async getAllCrops(@Query() paginationDto: PaginationDto) {
		return await this.cropService.getAllCrops(paginationDto);
	}

	@Get(':id')
	async getCropById(@Param('id') id: number) {
		return await this.cropService.getCropById(id);
	}

	@Delete(':id')
	async deleteCrop(@Param('id') id: number) {
		return await this.cropService.deleteCrop(id);
	}
}

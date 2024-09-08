import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Query,
	Request,
} from '@nestjs/common';
import { CropService } from './crop.service';
import { CreateCropDto } from './dto/create_crop.dto';
import { PaginationDto } from 'src/_shared/protocols/dto/pagination.dto';
import { UpdateCropDto } from './dto/update_crop.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Crops')
@Controller('crop')
export class CropController {
	constructor(private readonly cropService: CropService) {}

	@ApiResponse({ status: 201, description: 'Cultura criada com sucesso' })
	@ApiResponse({ status: 400, description: 'Essa cultura já esta cadastrada!' })
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

	@Patch(':id')
	async updateCrop(
		@Param('id') id: number,
		@Body() updateCropDto: UpdateCropDto
	) {
		return await this.cropService.updateCrop(id, updateCropDto);
	}

	@Delete(':id')
	async deleteCrop(@Param('id') id: number) {
		return await this.cropService.deleteCrop(id);
	}
}

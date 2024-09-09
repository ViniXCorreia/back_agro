import {
	Body,
	Controller,
	Delete,
	Get,
	Param,
	Patch,
	Post,
	Query,
} from '@nestjs/common';
import { RuralProducerService } from './rural_producer.service';
import { CreateRuralProducerDto } from './dto/createRuralProducer.dto';
import { PaginationDto } from 'src/_shared/protocols/dto/pagination.dto';
import { UpdateRuralProducerDto } from './dto/updateRuralProducer.dto';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { OperationResultsDto } from 'src/_shared/protocols/dto/operationResults.dto';
import { ReturnPaginatedDTO } from 'src/_shared/protocols/dto/returnPagination.dto';

@ApiTags('Rural Producers')
@Controller('rural_producer')
export class RuralProducerController {
	constructor(private readonly ruralProducerService: RuralProducerService) {}

	@ApiResponse({ status: 201, type: OperationResultsDto })
	@Post('create')
	async createRuralProducer(
		@Body() createRuralProducerDto: CreateRuralProducerDto
	) {
		return await this.ruralProducerService.createRuralProducer(
			createRuralProducerDto
		);
	}

	@ApiResponse({ status: 200, type: ReturnPaginatedDTO })
	@Get('/all')
	async getAllRuralProducers(@Query() paginationDto: PaginationDto) {
		return await this.ruralProducerService.getAllRuralProducers(paginationDto);
	}

	@ApiResponse({ status: 200, type: CreateRuralProducerDto })
	@Get(':id')
	async getRuralProducerById(@Param('id') id: number) {
		return await this.ruralProducerService.getRuralProducerById(id);
	}

	@ApiResponse({ status: 200, type: OperationResultsDto })
	@Patch(':id')
	async updateRuralProducer(
		@Param('id') id: number,
		@Body() updateRuralProducerDto: UpdateRuralProducerDto
	) {
		return await this.ruralProducerService.updateRuralProducer(
			id,
			updateRuralProducerDto
		);
	}

	@ApiResponse({ status: 200, type: OperationResultsDto })
	@Delete(':id')
	async deleteRuralProducer(@Param('id') id: number) {
		return await this.ruralProducerService.deleteRuralProducer(id);
	}
}

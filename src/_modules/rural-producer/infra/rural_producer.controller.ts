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
import { ApiTags } from '@nestjs/swagger';

@ApiTags('Rural Producers')
@Controller('rural_producer')
export class RuralProducerController {
	constructor(private readonly ruralProducerService: RuralProducerService) {}

	@Post('create')
	async createRuralProducer(
		@Body() createRuralProducerDto: CreateRuralProducerDto
	) {
		return await this.ruralProducerService.createRuralProducer(
			createRuralProducerDto
		);
	}

	@Get('/all')
	async getAllRuralProducers(@Query() paginationDto: PaginationDto) {
		return await this.ruralProducerService.getAllRuralProducers(paginationDto);
	}

	@Get(':id')
	async getRuralProducerById(@Param('id') id: number) {
		return await this.ruralProducerService.getRuralProducerById(id);
	}

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

	@Delete(':id')
	async deleteRuralProducer(@Param('id') id: number) {
		return await this.ruralProducerService.deleteRuralProducer(id);
	}
}

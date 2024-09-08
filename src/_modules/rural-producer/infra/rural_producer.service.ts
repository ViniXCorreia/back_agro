import { HttpException, Inject, Injectable } from '@nestjs/common';
import {
	CREATE_RURAL_PRODUCER_USE_CASE,
	ICreateRuralProducerUseCase,
} from '../useCases/createRuralProducerUseCase/createRuralProducerUseCase.interface';
import { CreateRuralProducerDto } from './dto/createRuralProducer.dto';
import {
	GET_RURAL_PRODUCER_BY_ID_USE_CASE,
	IGetRuralProducerByIdUseCase,
} from '../useCases/getRuralProducerByIdUseCase/getRuralProducerByIdUseCase.interface';
import {
	DELETE_RURAL_PRODUCER_USE_CASE,
	IDeleteRuralProducerUseCase,
} from '../useCases/deleteRuralProducerUseCase/deleteRuralProducerUseCase.interface';
import { PaginationDto } from 'src/_shared/protocols/dto/pagination.dto';
import {
	GET_ALL_RURAL_PRODUCERS_USE_CASE,
	IGetAllRuralProducersUseCase,
} from '../useCases/getAllRuralProducersUseCase/getAllRuralProducerUseCase.interface';
import {
	IUpdateRuralProducerUseCase,
	UPDATE_RURAL_PRODUCER_USE_CASE,
} from '../useCases/updateRuralProducerUseCase/updateRuralProducerUseCase.interface';
import { UpdateRuralProducerDto } from './dto/updateRuralProducer.dto';

@Injectable()
export class RuralProducerService {
	constructor(
		@Inject(CREATE_RURAL_PRODUCER_USE_CASE)
		private readonly createRuralProducerUseCase: ICreateRuralProducerUseCase,
		@Inject(GET_RURAL_PRODUCER_BY_ID_USE_CASE)
		private readonly getRuralProducerByIdUseCase: IGetRuralProducerByIdUseCase,
		@Inject(GET_ALL_RURAL_PRODUCERS_USE_CASE)
		private readonly getAllRuralProducersUseCase: IGetAllRuralProducersUseCase,
		@Inject(UPDATE_RURAL_PRODUCER_USE_CASE)
		private readonly updateRuralProducerUseCase: IUpdateRuralProducerUseCase,
		@Inject(DELETE_RURAL_PRODUCER_USE_CASE)
		private readonly deleteRuralProducerUseCase: IDeleteRuralProducerUseCase
	) {}

	async createRuralProducer(createRuralProducerDto: CreateRuralProducerDto) {
		try {
			return await this.createRuralProducerUseCase.execute({
				createRuralProducerDto,
			});
		} catch (error) {
			let [status, msg] = error.message.split('-');
			throw new HttpException(
				`${msg ?? 'Erro ao criar produtor rural!.'}`,
				+status
			);
		}
	}

	async getRuralProducerById(id: number) {
		try {
			return await this.getRuralProducerByIdUseCase.execute({ id });
		} catch (error) {
			let [status, msg] = error.message.split('-');
			throw new HttpException(
				`${msg ?? 'Erro ao buscar produtor rural!.'}`,
				+status
			);
		}
	}

	async getAllRuralProducers(paginationDto: PaginationDto) {
		try {
			return await this.getAllRuralProducersUseCase.execute({ paginationDto });
		} catch (error) {
			let [status, msg] = error.message.split('-');
			throw new HttpException(
				`${msg ?? 'Erro ao buscar produtores rurais!.'}`,
				+status
			);
		}
	}

	async updateRuralProducer(
		id: number,
		updateRuralProducerDto: UpdateRuralProducerDto
	) {
		try {
			return await this.updateRuralProducerUseCase.execute({
				id,
				updateRuralProducerDto,
			});
		} catch (error) {
			let [status, msg] = error.message.split('-');
			throw new HttpException(
				`${msg ?? 'Erro ao atualizar produtor rural!.'}`,
				+status
			);
		}
	}

	async deleteRuralProducer(id: number) {
		try {
			return await this.deleteRuralProducerUseCase.execute({ id });
		} catch (error) {
			let [status, msg] = error.message.split('-');
			throw new HttpException(
				`${msg ?? 'Erro ao deletar produtor rural!.'}`,
				+status
			);
		}
	}
}

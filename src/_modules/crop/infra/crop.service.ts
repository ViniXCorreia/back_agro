import { HttpException, Inject, Injectable } from '@nestjs/common';
import { CreateCropDto } from './dto/create_crop.dto';
import {
	CREATE_CROP_USE_CASE,
	ICreateCropUseCase,
} from '../useCases/createCropUseCase/createCrop.interface';
import {
	GET_CROP_BY_ID_USE_CASE,
	IGetCropByIdUseCase,
} from '../useCases/getCropByIdUseCase/getCropById.interface';
import { PaginationDto } from 'src/_shared/protocols/dto/pagination.dto';
import {
	GET_ALL_CROPS_USE_CASE,
	IGetAllCropsUseCase,
} from '../useCases/getAllCropsUseCase/getAllCropsUseCase.interface';
import {
	DELETE_CROP_USE_CASE,
	IDeleteCropUseCase,
} from '../useCases/deleteCropUseCase/deleteCropUseCase.interface';

@Injectable()
export class CropService {
	constructor(
		@Inject(CREATE_CROP_USE_CASE)
		private readonly createCropUseCase: ICreateCropUseCase,
		@Inject(GET_CROP_BY_ID_USE_CASE)
		private readonly getCropByIdUseCase: IGetCropByIdUseCase,
		@Inject(GET_ALL_CROPS_USE_CASE)
		private readonly getAllCropsUseCase: IGetAllCropsUseCase,
		@Inject(DELETE_CROP_USE_CASE)
		private readonly deleteCropUseCase: IDeleteCropUseCase
	) {}

	async createCrop(createCropDto: CreateCropDto) {
		try {
			return await this.createCropUseCase.execute(createCropDto);
		} catch (error) {
			let [status, msg] = error.message.split('-');
			throw new HttpException(`${msg ?? 'Erro ao criar cultura!.'}`, +status);
		}
	}

	async getCropById(id: number) {
		try {
			return await this.getCropByIdUseCase.execute({ id });
		} catch (error) {
			let [status, msg] = error.message.split('-');
			throw new HttpException(`${msg ?? 'Erro ao buscar cultura!.'}`, +status);
		}
	}

	async getAllCrops(paginationDto: PaginationDto) {
		try {
			return await this.getAllCropsUseCase.execute({ paginationDto });
		} catch (error) {
			let [status, msg] = error.message.split('-');
			throw new HttpException(`${msg ?? 'Erro ao buscar culturas!.'}`, +status);
		}
	}

	async deleteCrop(id: number) {
		try {
			return await this.deleteCropUseCase.execute({ id });
		} catch (error) {
			let [status, msg] = error.message.split('-');
			throw new HttpException(`${msg ?? 'Erro ao deletar cultura!.'}`, +status);
		}
	}
}

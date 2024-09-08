import { Inject, Logger } from '@nestjs/common';
import { RuralProducerEntity } from 'src/infra/database/entities/rural_producer.entity';
import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { Repository } from 'typeorm';
import {
	IUpdateRuralProducerDto,
	IUpdateRuralProducerUseCase,
} from './updateRuralProducerUseCase.interface';
import { OperationResultsDto } from 'src/_shared/protocols/dto/operationResults.dto';

export class UpdateRuralProducerUseCase implements IUpdateRuralProducerUseCase {
	logger = new Logger();

	constructor(
		@Inject(RepositoryProxyModule.RURAL_PRODUCER_REPOSITORY)
		private readonly ruralProducerRepository: Repository<RuralProducerEntity>
	) {}
	async execute(
		updateRuralProducerDto: IUpdateRuralProducerDto
	): Promise<OperationResultsDto> {
		try {
			const checkCpf = await this.validateCPF(
				updateRuralProducerDto.updateRuralProducerDto.cpf
			);
			if (!checkCpf) {
				throw new Error('400 - Documento inválido!');
			}
			const checkCnpj = await this.validateCNPJ(
				updateRuralProducerDto.updateRuralProducerDto.cnpj
			);
			if (!checkCnpj) {
				throw new Error('400 - Documento inválido!');
			}
			const findRuralProducer = await this.ruralProducerRepository.findOneBy({
				id: updateRuralProducerDto.id,
			});
			if (!findRuralProducer) {
				throw new Error('400 - Essa produtor rural não existe!');
			}
			const updateRuralProducer = {
				...findRuralProducer,
				...updateRuralProducerDto.updateRuralProducerDto,
			};
			await this.ruralProducerRepository.save(updateRuralProducer);
			let results = new OperationResultsDto();
			results.success = true;
			results.message = 'Produtor rural atualizado com sucesso!';
			return results;
		} catch (error) {
			this.logger.error(JSON.stringify(error));
			throw error;
		}
	}

	async validateCPF(cpf: string) {
		const checkEqualsNumbersRegex = /^(\d)\1+$/;
		if (checkEqualsNumbersRegex.test(cpf)) {
			return false;
		}
		const calcCheckDigit = (cpf: string, factor: number): number => {
			let total = 0;
			for (let i = 0; i < cpf.length; i++) {
				total += parseInt(cpf[i]) * factor--;
			}
			const remainder = total % 11;
			return remainder < 2 ? 0 : 11 - remainder;
		};

		const firstCheckDigit = calcCheckDigit(cpf.substring(0, 9), 10);
		if (firstCheckDigit !== parseInt(cpf[9])) {
			return false;
		}

		const secondCheckDigit = calcCheckDigit(cpf.substring(0, 10), 11);
		if (secondCheckDigit !== parseInt(cpf[10])) {
			return false;
		}
		return true;
	}

	async validateCNPJ(cnpj: string) {
		const checkEqualsNumbersRegex = /^(\d)\1+$/;
		if (checkEqualsNumbersRegex.test(cnpj)) {
			return false;
		}

		const calculateDigit = (cnpj: string, base: number[]) => {
			let sum = 0;
			for (let i = 0; i < base.length; i++) {
				sum += Number(cnpj[i]) * base[i];
			}
			const remainder = sum % 11;
			return remainder < 2 ? 0 : 11 - remainder;
		};

		const firstDigit = calculateDigit(
			cnpj,
			[5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
		);
		if (firstDigit !== Number(cnpj[12])) {
			return false;
		}

		const secondDigit = calculateDigit(
			cnpj,
			[6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
		);
		if (secondDigit !== Number(cnpj[13])) {
			return false;
		}
		return true;
	}
}

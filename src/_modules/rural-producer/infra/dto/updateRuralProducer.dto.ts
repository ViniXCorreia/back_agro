import { PartialType } from '@nestjs/mapped-types';
import { CreateRuralProducerDto } from './createRuralProducer.dto';

export class UpdateRuralProducerDto extends PartialType(
	CreateRuralProducerDto
) {}

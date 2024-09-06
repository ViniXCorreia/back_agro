import { Controller } from '@nestjs/common';
import { RuralProducerService } from './rural_producer.service';

@Controller('rural_producer')
export class RuralProducerController {
	constructor(private readonly ruralProducerService: RuralProducerService) {}
}

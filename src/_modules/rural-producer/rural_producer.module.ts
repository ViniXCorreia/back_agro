import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { Module } from '@nestjs/common';
import { RuralProducerController } from './infra/rural_producer.controller';
import { RuralProducerService } from './infra/rural_producer.service';

@Module({
	imports: [RepositoryProxyModule.register()],
	controllers: [RuralProducerController],
	exports: [RuralProducerService],
})
export class RuralProducerModule {}

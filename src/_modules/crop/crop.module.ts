import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { CropController } from './infra/crop.controller';
import { CropService } from './infra/crop.service';
import { Module } from '@nestjs/common';

@Module({
	imports: [RepositoryProxyModule.register()],
	controllers: [CropController],
	exports: [CropService],
})
export class CropModule {}

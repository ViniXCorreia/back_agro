import { RepositoryProxyModule } from 'src/infra/database/proxy/repository.proxy.module';
import { DashboardController } from './infra/dashboard.controller';
import { DashboardService } from './infra/dashboard.service';
import { Module } from '@nestjs/common';

@Module({
	imports: [RepositoryProxyModule.register()],
	controllers: [DashboardController],
	providers: [DashboardService],
	exports: [DashboardService],
})
export class DashboardModule {}

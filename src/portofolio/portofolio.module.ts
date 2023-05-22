import { Module } from '@nestjs/common';
import { PortofolioResolver } from './portofolio.resolver';
import { PortofolioService } from './portofolio.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Portofolio } from './entities/portofolio.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Portofolio])],
  providers: [PortofolioResolver, PortofolioService],
})
export class PortofolioModule {}

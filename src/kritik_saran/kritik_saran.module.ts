import { Module } from '@nestjs/common';
import { KritikSaranService } from './kritik_saran.service';
import { KritikSaranResolver } from './kritik_saran.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KritikSaran } from './entities/kritik_saran.entity';
// import { RedisModule } from '@nestjs/microservices';

@Module({
  imports: [TypeOrmModule.forFeature([KritikSaran])],
  providers: [KritikSaranResolver, KritikSaranService],
})
export class KritikSaranModule {}

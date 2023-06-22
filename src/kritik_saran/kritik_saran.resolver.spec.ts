import { Test, TestingModule } from '@nestjs/testing';
import { KritikSaranResolver } from './kritik_saran.resolver';
import { KritikSaranService } from './kritik_saran.service';

describe('KritikSaranResolver', () => {
  let resolver: KritikSaranResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [KritikSaranResolver, KritikSaranService],
    }).compile();

    resolver = module.get<KritikSaranResolver>(KritikSaranResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

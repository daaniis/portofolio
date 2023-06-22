import { Test, TestingModule } from '@nestjs/testing';
import { DivisiResolver } from './divisi.resolver';
import { DivisiService } from './divisi.service';

describe('DivisiResolver', () => {
  let resolver: DivisiResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DivisiResolver, DivisiService],
    }).compile();

    resolver = module.get<DivisiResolver>(DivisiResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

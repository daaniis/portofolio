import { Test, TestingModule } from '@nestjs/testing';
import { PortofolioResolver } from './portofolio.resolver';

describe('PortofolioResolver', () => {
  let resolver: PortofolioResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PortofolioResolver],
    }).compile();

    resolver = module.get<PortofolioResolver>(PortofolioResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { JenisProjectResolver } from './jenis_project.resolver';
import { JenisProjectService } from './jenis_project.service';

describe('JenisProjectResolver', () => {
  let resolver: JenisProjectResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JenisProjectResolver, JenisProjectService],
    }).compile();

    resolver = module.get<JenisProjectResolver>(JenisProjectResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

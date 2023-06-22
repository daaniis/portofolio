import { Test, TestingModule } from '@nestjs/testing';
import { JenisProjectService } from './jenis_project.service';

describe('JenisProjectService', () => {
  let service: JenisProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JenisProjectService],
    }).compile();

    service = module.get<JenisProjectService>(JenisProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

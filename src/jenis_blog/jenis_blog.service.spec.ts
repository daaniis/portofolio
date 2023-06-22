import { Test, TestingModule } from '@nestjs/testing';
import { JenisBlogService } from './jenis_blog.service';

describe('JenisBlogService', () => {
  let service: JenisBlogService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JenisBlogService],
    }).compile();

    service = module.get<JenisBlogService>(JenisBlogService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

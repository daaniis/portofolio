import { Test, TestingModule } from '@nestjs/testing';
import { NeedUsService } from './need_us.service';

describe('NeedUsService', () => {
  let service: NeedUsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NeedUsService],
    }).compile();

    service = module.get<NeedUsService>(NeedUsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});

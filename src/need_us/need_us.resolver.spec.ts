import { Test, TestingModule } from '@nestjs/testing';
import { NeedUsResolver } from './need_us.resolver';
import { NeedUsService } from './need_us.service';

describe('NeedUsResolver', () => {
  let resolver: NeedUsResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [NeedUsResolver, NeedUsService],
    }).compile();

    resolver = module.get<NeedUsResolver>(NeedUsResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

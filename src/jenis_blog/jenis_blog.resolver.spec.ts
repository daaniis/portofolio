import { Test, TestingModule } from '@nestjs/testing';
import { JenisBlogResolver } from './jenis_blog.resolver';
import { JenisBlogService } from './jenis_blog.service';

describe('JenisBlogResolver', () => {
  let resolver: JenisBlogResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JenisBlogResolver, JenisBlogService],
    }).compile();

    resolver = module.get<JenisBlogResolver>(JenisBlogResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});

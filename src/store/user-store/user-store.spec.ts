import { Test, TestingModule } from '@nestjs/testing';
import { UserStore } from './user-store';

describe('UserStore', () => {
  let provider: UserStore;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserStore],
    }).compile();

    provider = module.get<UserStore>(UserStore);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});

import { cacheKey } from '../../src/utils/cacheKey';

declare let global: never;

describe('Cache Key Creation', () => {
  const testGuid = '1';
  const expectedResult = 'fake.data:1';
  beforeEach(() => {
    Object.assign(global, { CACHE_KEY_PREFIX: 'fake.data:' });
    jest.resetModules();
  });

  test('create cache key', async () => {
    const result = cacheKey(testGuid);
    expect(result).toEqual(expectedResult);
  });
});

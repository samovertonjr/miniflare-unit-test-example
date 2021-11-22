import { jest } from '@jest/globals';
import { cacheKey } from './cacheKey';

declare let global: never;

describe('Cache Key Creation', () => {
  const testGuid = '1';
  const expectedResult = 'dev.data:1';
  beforeEach(() => {
    Object.assign(global, getMiniflareBindings());
    jest.resetModules();
  });

  test('create cache key', async () => {
    const result = cacheKey(testGuid);
    expect(result).toEqual(expectedResult);
  });
});

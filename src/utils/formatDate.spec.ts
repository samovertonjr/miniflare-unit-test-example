import { jest } from '@jest/globals';

import { yearMonthDayFormat } from './formatDate';

describe('Format Date', () => {
  beforeEach(() => {
    jest.resetModules();
  });

  test('should return year, month, and day format', async () => {
    const date = '20221125';
    const expectedResult = '2022-11-25';
    const result = yearMonthDayFormat(date);
    expect(result).toEqual(expectedResult);
  });

  test('should return null when date is null', async () => {
    const date = null;
    const expectedResult = null;
    const result = yearMonthDayFormat(date);
    expect(result).toEqual(expectedResult);
  });
});

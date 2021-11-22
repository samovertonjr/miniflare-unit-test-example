// test/index.spec.js
import { jest } from '@jest/globals';
import { handleRequest } from './index';

declare let global: never;

beforeEach(() => {
  Object.assign(global, getMiniflareBindings());
  jest.resetModules();
});

test('responds with url', async () => {
  const req = new Request('http://localhost/');
  const res = await handleRequest(req);
  expect(await res.text()).toBe('URL: http://localhost/ KEY: me');
});

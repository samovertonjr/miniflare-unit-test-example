// test/index.spec.js
import { handleRequest } from '../../../src/api/flare/index';

test('responds with url', async () => {
  const req = new Request('http://localhost/');
  const res = await handleRequest(req);
  expect(await res.text()).toBe('URL: http://localhost/ KEY: value');
});

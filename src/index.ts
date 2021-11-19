import { Router } from 'itty-router';
import { handleRequest } from './api/flare';
const usccaRouter = Router();

usccaRouter.get('*', handleRequest);

addEventListener('fetch', (event) => {
  event.respondWith(usccaRouter.handle(event.request));
});

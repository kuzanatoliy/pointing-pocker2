import express, { RequestHandler, IRouter } from 'express';

import { APP_NAME } from './constants';

const TEST_MESSAGE = `The ${APP_NAME} server is available`;

export class Application {
  constructor(middlewares: RequestHandler[] = [], routers: IRouter[] = []) {
    const app = express();
    app.use([...middlewares, ...routers]);
    app.get('/available', (req, res) => res.send(TEST_MESSAGE));
    return app;
  }
}

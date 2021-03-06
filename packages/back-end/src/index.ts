import * as http from 'http';

import * as bodyParser from 'body-parser';
import session from 'express-session';
import cors from 'cors';

import { APP_PORT, APP_SECRET } from './constants';
import { authRouter, googleOAuth2Router } from './routes';
import { Application } from './Application';

const middlewares = [
  cors(),
  bodyParser.json(),
  session({
    resave: true,
    saveUninitialized: true,
    secret: APP_SECRET,
  }),
];

const server = http.createServer(new Application(middlewares, [authRouter, googleOAuth2Router]));

server.listen(APP_PORT, () => {
  console.log(`Server run on ${APP_PORT} port`);
});

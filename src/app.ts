import path from 'path';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import express, { Express } from 'express';

import { Context } from './context';

import { default as indexRouter } from './routes/index';
import { default as usersRouter } from './routes/users';

export default function configureApp(context: Context) {
  const app = express();

  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/', indexRouter);
  app.use('/users', usersRouter);

  return app;
}

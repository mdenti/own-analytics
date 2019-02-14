import path from 'path';
import morgan from 'morgan';
import cookieParser from 'cookie-parser';
import express from 'express';

import { Context } from './context';

import { default as indexRouter } from './routes/index';
import { default as eventsRouter } from './routes/events';

export default function configureApp(context: Context) {
  const app = express();

  if (context.env === 'prod') {
    app.set('trust proxy', true);
  }

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());
  app.use(express.static(path.join(__dirname, 'public')));

  app.use('/', indexRouter);
  app.use('/events', eventsRouter(context));

  return app;
}

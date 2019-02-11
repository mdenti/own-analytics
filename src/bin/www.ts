import http from 'http';

import config from '../config';

import { normalizePort, onError, onListening } from './utils';

import { default as createContext } from '../context';
import { default as configureApp } from '../app';

createContext(config)
  .then((context) => {
    const port = normalizePort(config.port);
    const app = configureApp(context);

    app.set('port', port);

    const server = http.createServer(app);
    server.listen(port);
    server.on('error', onError(port));
    server.on('listening', onListening(server.address()));
  })
  .catch((err) => {
    console.error(err);
  });

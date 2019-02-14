import express from 'express';

import { Event, addEvent } from '../events';
import { Context } from '../context';

import { eventCreateInput, EventCreateInput } from '../api';

async function checkInputAndAddEvent(context: Context, data: any, ip: string) {
  const { elasticSearch } = context;

  const input: EventCreateInput = eventCreateInput.check(data);
  const event: Event = Object.assign({}, input, {
    ip,
    timestamp: new Date(),
  });

  await addEvent(elasticSearch, event);
}

// TODO: add error handling to the routes
export default function configureRouter(context: Context) {
  const router = express.Router();

  router.get('/', async (req, res) => {
    // we may want to use shorter parameter names here
    await checkInputAndAddEvent(context, req.query, req.ip);
    res.send();
  });

  router.post('/', async (req, res) => {
    await checkInputAndAddEvent(context, req.body, req.ip);
    res.send();
  });

  return router;
}

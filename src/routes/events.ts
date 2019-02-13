import express from 'express';

import { Event, addEvent } from '../events';
import { Context } from '../context';

import { eventCreateInput, EventCreateInput } from '../api';

export default function configureRouter(context: Context) {
  const { elasticSearch } = context;
  const router = express.Router();

  router.post('/', async (req, res) => {
    const input: EventCreateInput = eventCreateInput.check(req.body);
    const event: Event = Object.assign({}, input, {
      ip: req.ip,
      timestamp: new Date(),
    });

    await addEvent(elasticSearch, event);

    res.send();
  });

  return router;
}

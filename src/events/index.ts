import { Client } from 'elasticsearch';

import { EVENTS_INDEX } from '../elasticsearch/setup';

export interface Event {
  category: string;
  type: string;
  action: string;
  label: string;
  timestamp: Date;
  ip: string;
  url: string;
  urlDomain: string;
  urlPath: string;
  referrer: string;
}

export async function addEvent(client: Client, eventData: Event) {
  const { _shards: { successful } } = await client.create({
    index: EVENTS_INDEX,
    type: '_doc',
    body: eventData,
  });

  return successful > 0;
}

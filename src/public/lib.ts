import 'whatwg-fetch';
import { EventCreateInput } from '../api/specs';

interface EventInput {
  type: string;
  category: string;
  action?: string;
  label?: string;
}

async function send(eventData: EventInput, callback?: () => void) {
  const eventDefaults: EventCreateInput = {
    type: 'event',
    category: '',
    action: '',
    label: '',
    url: window.location.href,
    urlDomain: window.location.hostname,
    urlPath: window.location.pathname,
    referrer: document.referrer,
  };
  const event: EventCreateInput = { ...eventDefaults, ...eventData };
  const response = await fetch('', {
    cache: 'no-cache',
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(event),
  });
  if (response.status !== 200) {
    throw new Error('Bad data sent with event');
  }
  if (callback) return callback();
  return;
}

async function analytics(command: string, data: any, callback?: () => void) {
  switch (command) {
    case 'send':
      return send(data, callback);
    default:
      return;
  }
}

interface PreAN {
  q: any[];
}

declare global {
  interface Window { an: PreAN; }
}

const existing = window.an;

existing.q.forEach((args) => {
  analytics.call(null, args);
});

export default analytics;

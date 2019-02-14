import 'whatwg-fetch';
import { EventCreateInput } from '../api/specs';

interface AnPreUsage {
  domain: string;
  q: any[];
}

declare global {
  interface Window {
    _an: AnPreUsage;
  }
}

const { domain, q: queue } = window._an;

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
  console.log('Send analytics event', event);

  const response = await fetch(`${domain}/events`, {
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

queue.forEach((args) => {
  analytics.apply(null, args);
});

export default analytics;

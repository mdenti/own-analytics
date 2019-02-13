import { EventCreateInput } from '../api/specs';

interface EventInput {
  type?: string;
  category?: string;
  action?: string;
  label?: string;
}

function send(eventBase: EventInput, callback: () => void) {
  const eventDefaults = {
    type: 'event',
    category: '',
    action: '',
    label: '',
    url: '',
    referrer: '',
  };
  const event: EventCreateInput = Object.assign({}, eventDefaults, eventBase);
}

function an(command: string, data: any, callback: () => void) {
  switch (command) {
    case 'send':
      send(data, callback);
      break;
    default:
      break;
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
  an.call(null, args);
});

export default an;

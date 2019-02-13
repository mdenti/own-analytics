import { Record, String } from 'runtypes';

export { EventCreateInput } from './specs';
// Note: I'm not happy about this, it sucks..
// typescript really needs a way to typecheck objects
// from interfaces during runtime
export const eventCreateInput = Record({
  category: String,
  type: String,
  action: String,
  label: String,
  referrer: String,
  url: String,
  urlDomain: String,
  urlPath: String,
});

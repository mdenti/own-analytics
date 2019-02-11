import { Client } from 'elasticsearch';

import { Config } from '../config';
import { setupIndices } from './setup';

export default async function getClient(config: Config) {
  const { host, port } = config.elasticSearch;

  const client = new Client({
    host: `${host}:${port}`,
    log: 'error',
  });

  await setupIndices(client);

  return client;
}

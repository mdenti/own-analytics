import { Client } from 'elasticsearch';

import { Config } from './config';
import { default as getESClient } from './elasticsearch';

export interface Context {
  elasticSearch: Client;
}

export default async function createContext(config: Config) {
  const context: Context = {
    elasticSearch: await getESClient(config),
  };

  return context;
}

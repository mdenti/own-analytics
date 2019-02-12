interface ElasticSearchConfig {
  host: string;
  port: string;
}

export interface Config {
  env: string;
  port: string;
  elasticSearch: ElasticSearchConfig;
}

const config: Config = {
  env: process.env.NODE_ENV || 'prod',
  port: process.env.PORT || '3000',
  elasticSearch: {
    host: process.env.ELASTICSEARCH_HOST || 'localhost',
    port: process.env.ELASTICSEARCH_PORT || '9200',
  },
};

export default config;

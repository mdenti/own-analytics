interface ElasticSearchConfig {
  host: string;
  port: string;
}

export interface Config {
  port: string;
  elasticSearch: ElasticSearchConfig;
}

const config: Config = {
  port: process.env.PORT || '3000',
  elasticSearch: {
    host: process.env.ELASTICSEARCH_HOST || 'localhost',
    port: process.env.ELASTICSEARCH_PORT || '9200',
  },
};

export default config;

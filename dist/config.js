"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    port: process.env.PORT || '3000',
    elasticSearch: {
        host: process.env.ELASTICSEARCH_HOST || 'localhost',
        port: process.env.ELASTICSEARCH_PORT || '9200',
    },
};
exports.default = config;
//# sourceMappingURL=config.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const config_1 = __importDefault(require("../config"));
const utils_1 = require("./utils");
const context_1 = __importDefault(require("../context"));
const app_1 = __importDefault(require("../app"));
context_1.default(config_1.default)
    .then((context) => {
    const port = utils_1.normalizePort(config_1.default.port);
    const app = app_1.default(context);
    app.set('port', port);
    const server = http_1.default.createServer(app);
    server.listen(port);
    server.on('error', utils_1.onError(port));
    server.on('listening', utils_1.onListening(server.address()));
})
    .catch((err) => {
    console.error(err);
});
//# sourceMappingURL=www.js.map
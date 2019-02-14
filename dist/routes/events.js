"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const events_1 = require("../events");
const api_1 = require("../api");
function checkInputAndAddEvent(context, data, ip) {
    return __awaiter(this, void 0, void 0, function* () {
        const { elasticSearch } = context;
        const input = api_1.eventCreateInput.check(data);
        const event = Object.assign({}, input, {
            ip,
            timestamp: new Date(),
        });
        yield events_1.addEvent(elasticSearch, event);
    });
}
// TODO: add error handling to the routes
function configureRouter(context) {
    const router = express_1.default.Router();
    router.get('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
        // we may want to use shorter parameter names here
        yield checkInputAndAddEvent(context, req.query, req.ip);
        res.send();
    }));
    router.post('/', (req, res) => __awaiter(this, void 0, void 0, function* () {
        yield checkInputAndAddEvent(context, req.body, req.ip);
        res.send();
    }));
    return router;
}
exports.default = configureRouter;
//# sourceMappingURL=events.js.map
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const setup_1 = require("../elasticsearch/setup");
function addEvent(client, eventData) {
    return __awaiter(this, void 0, void 0, function* () {
        const { _shards: { successful } } = yield client.create({
            index: setup_1.EVENTS_INDEX,
            type: '_doc',
            body: eventData,
        });
        return successful > 0;
    });
}
exports.addEvent = addEvent;
//# sourceMappingURL=index.js.map
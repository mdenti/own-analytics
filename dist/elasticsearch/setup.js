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
exports.EVENTS_INDEX = 'eventlog';
function setupMapping(es, index, propertyName, propertyBody) {
    return __awaiter(this, void 0, void 0, function* () {
        const result = yield es.indices.getMapping({
            index,
            type: '_doc',
        });
        const mappingExists = !!result[index].mappings._doc.properties[propertyName];
        if (!mappingExists) {
            yield es.indices.putMapping({
                index,
                type: '_doc',
                body: {
                    properties: {
                        [propertyName]: propertyBody,
                    },
                },
            });
        }
    });
}
function setupIndices(es) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!(yield es.indices.exists({ index: exports.EVENTS_INDEX }))) {
            yield es.indices.create({ index: exports.EVENTS_INDEX, body: { mappings: { _doc: {} } } });
        }
        yield setupMapping(es, exports.EVENTS_INDEX, 'category', { type: 'keyword' });
        yield setupMapping(es, exports.EVENTS_INDEX, 'type', { type: 'keyword' });
        yield setupMapping(es, exports.EVENTS_INDEX, 'action', { type: 'keyword' });
        yield setupMapping(es, exports.EVENTS_INDEX, 'label', { type: 'keyword' });
        yield setupMapping(es, exports.EVENTS_INDEX, 'timestamp', { type: 'date' });
        yield setupMapping(es, exports.EVENTS_INDEX, 'ip', { type: 'ip' });
        yield setupMapping(es, exports.EVENTS_INDEX, 'url', { type: 'keyword' });
        yield setupMapping(es, exports.EVENTS_INDEX, 'referrer', { type: 'keyword' });
    });
}
exports.setupIndices = setupIndices;
//# sourceMappingURL=setup.js.map
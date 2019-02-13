"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const runtypes_1 = require("runtypes");
// Note: I'm not happy about this, it sucks..
// typescript really needs a way to typecheck objects
// from interfaces during runtime
exports.eventCreateInput = runtypes_1.Record({
    category: runtypes_1.String,
    type: runtypes_1.String,
    action: runtypes_1.String,
    label: runtypes_1.String,
    referrer: runtypes_1.String,
    url: runtypes_1.String,
});
//# sourceMappingURL=index.js.map
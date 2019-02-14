"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const morgan_1 = __importDefault(require("morgan"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const events_1 = __importDefault(require("./routes/events"));
function configureApp(context) {
    const app = express_1.default();
    if (context.env === 'prod') {
        app.set('trust proxy', true);
    }
    app.use((req, res, next) => {
        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Headers', 'Content-Type');
        next();
    });
    app.use(morgan_1.default('dev'));
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: false }));
    app.use(cookie_parser_1.default());
    app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
    app.use('/', index_1.default);
    app.use('/events', events_1.default(context));
    return app;
}
exports.default = configureApp;
//# sourceMappingURL=app.js.map
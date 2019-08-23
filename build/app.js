"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var routes_1 = require("./routes");
var App = /** @class */ (function () {
    function App() {
        this.routePrv = new routes_1.Routes();
        this.app = express_1.default();
        this.config();
        this.routePrv.routes(this.app);
    }
    App.prototype.config = function () {
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "origin, x-requested-with");
            res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
            next();
        });
        this.app.use(body_parser_1.default.json());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
    };
    return App;
}());
exports.default = new App().app;

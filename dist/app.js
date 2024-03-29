"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = __importStar(require("body-parser"));
const express_1 = __importDefault(require("express"));
class App {
    constructor() {
        this.Start = (port) => {
            return new Promise((resolve, reject) => {
                this.httpServer.listen(port, () => {
                    resolve(port);
                }).on("error", (err) => reject(err));
            });
        };
        this.httpServer = express_1.default();
        this.httpServer.use(bodyParser.urlencoded({ extended: true }));
        this.httpServer.use(bodyParser.json());
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map
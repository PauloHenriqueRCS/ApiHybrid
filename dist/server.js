"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const logger_1 = __importDefault(require("./log/logger"));
const port = 8080;
const server = new app_1.default().Start(port)
    .then(() => logger_1.default.info("connect success"))
    .catch((error) => {
    logger_1.default.log("error", new Error("connect failed").message);
    process.exit(1);
});
exports.default = server;
//# sourceMappingURL=server.js.map
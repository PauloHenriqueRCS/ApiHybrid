"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const winston_1 = __importStar(require("winston"));
class Logger {
    constructor() {
        this.filepathname = path_1.default.join(__dirname, "logfile.log");
        this.filepathnameexception = path_1.default.join(__dirname, "exceptionfile.log");
    }
    init() {
        return winston_1.default.createLogger({
            format: winston_1.format.combine(winston_1.format.label({
                label: "[my-label]"
            }), winston_1.format.timestamp({
                format: "DD-MM-YYYY HH:mm:ss"
            }), winston_1.format.printf((info) => `{"level": "${info.level}","date": "${info.timestamp}","message": "${info.message}"}`)),
            transports: [
                new winston_1.default.transports.Console(),
                new winston_1.default.transports.File({ filename: this.filepathname }),
            ]
            //  exceptionHandlers: [
            //     new winston.transports.Console(),
            //    new winston.transports.File({ filename: this.filepathnameexception })
            //  ]
        });
    }
}
exports.default = new Logger().init();
//# sourceMappingURL=logger.js.map
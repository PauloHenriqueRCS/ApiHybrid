"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _path = require('path'); var _path2 = _interopRequireDefault(_path);
var _winston = require('winston'); var _winston2 = _interopRequireDefault(_winston);

class Logger {
  
  

  constructor() {
    this.filepathname = _path2.default.join(__dirname, "logfile.log");
    this.filepathnameexception = _path2.default.join(__dirname, "exceptionfile.log");
  }

   init() {
    return _winston2.default.createLogger({
      format: _winston.format.combine(
        _winston.format.label({
          label: "[my-label]"
        }),
        _winston.format.timestamp({
          format: "DD-MM-YYYY HH:mm:ss"
        }),
        _winston.format.printf((info) => `{"level": "${info.level}","date": "${info.timestamp}","message": "${info.message}"}`)),
      transports: [
        new _winston2.default.transports.Console(),
        new _winston2.default.transports.File({ filename: this.filepathname }),
      ]
      //  exceptionHandlers: [
      //     new winston.transports.Console(),
      //    new winston.transports.File({ filename: this.filepathnameexception })
      //  ]
    });
  }
}

exports. default = new Logger().init();

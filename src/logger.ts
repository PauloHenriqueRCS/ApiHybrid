import path, { dirname } from "path";
import winston, { format } from "winston";

class Logger {
  public filepathname: string;
  public filepathnameexception: string;

  constructor() {
    this.filepathname = path.join(__dirname, "logfile.log");
    this.filepathnameexception = path.join(__dirname, "exceptionfile.log");
  }

  public init() {
    return winston.createLogger({
      format: format.combine(
        format.label({
          label: "[my-label]"
        }),
        format.timestamp({
          format: "DD-MM-YYYY HH:mm:ss"
        }),
        format.printf((info) => `{"level": "${info.level}","date": "${info.timestamp}","message": "${info.message}"}`)),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({ filename: this.filepathname }),
      ]
      //  exceptionHandlers: [
      //     new winston.transports.Console(),
      //    new winston.transports.File({ filename: this.filepathnameexception })
      //  ]
    });
  }
}

export default new Logger().init();

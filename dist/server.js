"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _app = require('./app'); var _app2 = _interopRequireDefault(_app);
require('./utils/config');
var _logger = require('./logger'); var _logger2 = _interopRequireDefault(_logger);


const port = 3333;

const start = (port) => {
    try {
        new Promise((resolve, reject) => {
            _app2.default.listen(port, () => {
                resolve(port);
            });
        });
        return _logger2.default.info("connect success");
    }
    catch (error) {
        _logger2.default.log("error", new Error("connect failed").message);
        process.exit(1);
    }
}

start(port)
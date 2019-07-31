"use strict"; function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { newObj[key] = obj[key]; } } } newObj.default = obj; return newObj; } } function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }Object.defineProperty(exports, "__esModule", {value: true});var _bodyparser = require('body-parser'); var bodyParser = _interopRequireWildcard(_bodyparser);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _mongoose = require('mongoose'); var _mongoose2 = _interopRequireDefault(_mongoose);

var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

class App {
    

    constructor() {
        this.express = _express2.default.call(void 0, )
        this.middlewares()
        this.database()
        this.routes()
    }

     middlewares() {
        this.express.use(bodyParser.urlencoded({ extended: true }))
        this.express.use(bodyParser.json())
        this.express.use(_express2.default.json())
        this.express.use(_cors2.default.call(void 0, ))
    }

     database() {
        _mongoose2.default.connect('', {
            useNewUrlParser: true
        })
    }

     routes() {
        this.express.get('/', (req, res) => {
            return res.send('Ok')
        })
    }
}

exports. default = new App().express

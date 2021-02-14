"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _morgan = _interopRequireDefault(require("morgan"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _initialSetup = require("./libs/initialSetup");

var _tasks = _interopRequireDefault(require("./routes/tasks.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

var _machine = _interopRequireDefault(require("./routes/machine.routes"));

var app = (0, _express["default"])(); //Global Variables

_dotenv["default"].config();

app.set('port', process.env.PORT || 5000);
(0, _initialSetup.createRoles)(); // Middlewares

app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json()); // for parsing application/json

app.use(_bodyParser["default"].json()); // for parsing application/xwww-
//app.use(bodyParser.urlencoded({ extended: true }));

app.use(_bodyParser["default"].urlencoded({
  extended: false
}));
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public')));
app.use('/api/tasks', _tasks["default"]);
app.use('/api/auth', _auth["default"]);
app.use('/api/users', _user["default"]);
app.use('/api/machine', _machine["default"]);
var _default = app;
exports["default"] = _default;
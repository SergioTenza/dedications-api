"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = _interopRequireDefault(require("express"));

var _path = _interopRequireDefault(require("path"));

var _morgan = _interopRequireDefault(require("morgan"));

var _dotenv = _interopRequireDefault(require("dotenv"));

var _cors = _interopRequireDefault(require("cors"));

var _helmet = _interopRequireDefault(require("helmet"));

var _swaggerJsdoc = _interopRequireDefault(require("swagger-jsdoc"));

var _swaggerUiExpress = _interopRequireDefault(require("swagger-ui-express"));

var _initialSetup = require("./libs/initialSetup");

var _tasks = _interopRequireDefault(require("./routes/tasks.routes"));

var _auth = _interopRequireDefault(require("./routes/auth.routes"));

var _user = _interopRequireDefault(require("./routes/user.routes"));

var _machine = _interopRequireDefault(require("./routes/machine.routes"));

var _facturacion = _interopRequireDefault(require("./routes/facturacion.routes"));

var _agenda = _interopRequireDefault(require("./routes/agenda.routes"));

var app = (0, _express["default"])(); //Global Variables

_dotenv["default"].config();

app.set('port', process.env.PORT || 5001);
(0, _initialSetup.createRoles)();
var options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Dedications API con Swagger",
      version: "0.1.0",
      description: "Dedications CRUD API application hecha con Express y documentada con Swagger",
      license: {
        name: "MIT",
        url: "https://spdx.org/licenses/MIT.html"
      },
      contact: {
        name: "Sergio",
        url: "https://sergiotenza.github.io/",
        email: "tnzservicios@gmail.com"
      }
    },
    servers: [{
      url: "http://localhost:3000/api"
    }]
  },
  apis: ["./routes/tasks.routes.js"]
};
var specs = (0, _swaggerJsdoc["default"])(options);
app.use("/api-docs", _swaggerUiExpress["default"].serve, _swaggerUiExpress["default"].setup(specs));
app.use((0, _cors["default"])()); // Middlewares

app.use((0, _morgan["default"])('dev'));
app.use(_express["default"].json());
app.use(_express["default"].urlencoded({
  extended: false
}));
app.use(_express["default"]["static"](_path["default"].join(__dirname, 'public')));
app.use((0, _helmet["default"])());
app.use('/api/tasks', _tasks["default"]);
app.use('/api/auth', _auth["default"]);
app.use('/api/users', _user["default"]);
app.use('/api/machine', _machine["default"]);
app.use('/api/fact', _facturacion["default"]);
app.use('/api/agenda', _agenda["default"]);
app.get('/api', function (req, res) {
  res.json({
    message: 'Bienvenido a la Api Dedications By FunPhotosSystems',
    email: 'Si quiere trabajar con nosotros pongase en contacto con tnzservicios@gmail.com'
  });
});
var _default = app;
exports["default"] = _default;
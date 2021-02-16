"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.signin = exports.signup = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _User = _interopRequireDefault(require("../models/User"));

var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));

var _Role = _interopRequireDefault(require("../models/Role"));

var signup = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(req, res) {
    var _req$body, username, email, password, roles, newUser, foundRoles, role, savedUser, token;

    return _regenerator["default"].wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _req$body = req.body, username = _req$body.username, email = _req$body.email, password = _req$body.password, roles = _req$body.roles;
            console.log(username, email, password, roles); //const userFound = User.find({email});

            _context.t0 = _User["default"];
            _context.t1 = username;
            _context.t2 = email;
            _context.next = 7;
            return _User["default"].encryptPassword(password);

          case 7:
            _context.t3 = _context.sent;
            _context.t4 = {
              username: _context.t1,
              email: _context.t2,
              password: _context.t3
            };
            newUser = new _context.t0(_context.t4);

            if (!roles) {
              _context.next = 23;
              break;
            }

            _context.prev = 11;
            _context.next = 14;
            return _Role["default"].find({
              name: {
                $in: roles
              }
            });

          case 14:
            foundRoles = _context.sent;
            newUser.roles = foundRoles.map(function (role) {
              return role._id;
            });
            _context.next = 21;
            break;

          case 18:
            _context.prev = 18;
            _context.t5 = _context["catch"](11);
            console.error(_context.t5);

          case 21:
            _context.next = 27;
            break;

          case 23:
            _context.next = 25;
            return _Role["default"].findOne({
              name: "user"
            });

          case 25:
            role = _context.sent;
            newUser.roles = [role._id];

          case 27:
            _context.next = 29;
            return newUser.save();

          case 29:
            savedUser = _context.sent;
            console.log(savedUser);
            token = _jsonwebtoken["default"].sign({
              id: savedUser._id
            }, process.env.SECRET, {
              expiresIn: 86400 //1 dia en segundos

            });
            res.status(200).json({
              token: token
            });

          case 33:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, null, [[11, 18]]);
  }));

  return function signup(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

exports.signup = signup;

var signin = /*#__PURE__*/function () {
  var _ref2 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(req, res) {
    var userFound, matchPassword, token;
    return _regenerator["default"].wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return _User["default"].findOne({
              email: req.body.email
            }).populate("roles");

          case 2:
            userFound = _context2.sent;

            if (userFound) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res.status(400).render('400', {
              message: 'usuario no encontrado o inexistente',
              status: '400'
            }));

          case 5:
            _context2.next = 7;
            return _User["default"].comparePassword(req.body.password, userFound.password);

          case 7:
            matchPassword = _context2.sent;

            if (matchPassword) {
              _context2.next = 10;
              break;
            }

            return _context2.abrupt("return", res.status(401).json({
              token: null,
              message: 'invalid password',
              status: '401'
            }).render('401'));

          case 10:
            token = _jsonwebtoken["default"].sign({
              id: userFound._id
            }, process.env.SECRET, {
              expiresIn: 86400 // 24 Horas en segundos

            });
            res.status(200).json({
              token: token
            });

          case 12:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2);
  }));

  return function signin(_x3, _x4) {
    return _ref2.apply(this, arguments);
  };
}();

exports.signin = signin;
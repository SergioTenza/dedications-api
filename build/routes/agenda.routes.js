"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _express = require("express");

var agendaCtrl = _interopRequireWildcard(require("../controllers/agenda.controller"));

var _middlewares = require("../middlewares");

var router = (0, _express.Router)();
router.get('/', _middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, agendaCtrl.getAgenda);
router.get('/:machineId', _middlewares.authJwt.verifyToken, _middlewares.authJwt.isAdmin, agendaCtrl.getAgendaById);
var _default = router;
exports["default"] = _default;
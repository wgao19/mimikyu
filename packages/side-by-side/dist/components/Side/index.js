"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _context = require("../../context");

var _context2 = _interopRequireDefault(_context);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (_ref) {
  var renderSide = _ref.renderSide,
      className = _ref.className;
  return _react2.default.createElement(
    _context2.default.Consumer,
    null,
    function (current) {
      return _react2.default.createElement(
        "div",
        { className: className },
        renderSide(current)
      );
    }
  );
};
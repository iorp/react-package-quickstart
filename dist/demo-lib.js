'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

// src/DemoButton.js
function DemoButton(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React__default["default"].createElement("button", null, text);
}

// src/DemoButton.js
function DemoButtonA(_ref) {
  var text = _ref.text;
  return /*#__PURE__*/React__default["default"].createElement("button", null, text, " A");
}

exports.DemoButton = DemoButton;
exports.DemoButtonA = DemoButtonA;

"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.Default = void 0;
var _react = _interopRequireDefault(require("react"));
var _Button = _interopRequireDefault(require("./Button"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
// src/components/Button.stories.js
var _default = exports.default = {
  title: "Example/Button",
  component: _Button.default
  // argTypes: {
  // backgroundColor: { control: "color" },
  // },
};
const Template = args => /*#__PURE__*/_react.default.createElement(_Button.default, args);
const Default = exports.Default = Template.bind({});
Default.args = {
  label: "My Button"
};
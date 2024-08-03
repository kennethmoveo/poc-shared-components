"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const Button = props => {
  // const mode = props.primary
  // 	? "storybook-button--primary"
  // 	: "storybook-button--secondary";
  return /*#__PURE__*/_react.default.createElement("button", _extends({
    type: "button",
    className: ["storybook-button",
    // `storybook-button--${props.mode}`,
    "storybook-button--primary", "storybook-button--storybook-button--primary"
    // props.mode,
    ].join(" "),
    style: props.backgroundColor && {
      ...props.backgroundColor
    }
  }, props), props.label);
};
var _default = exports.default = Button;
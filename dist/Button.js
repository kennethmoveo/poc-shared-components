"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
require("./button.css");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Primary UI component for user interaction
 */
// export const Button = ({ primary, backgroundColor, size, label, ...props }) => {
const Button = _ref => {
  let {
    backgroundColor,
    size,
    label,
    ...props
  } = _ref;
  // const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return /*#__PURE__*/_react.default.createElement("button", _extends({
    type: "button",
    className: ["storybook-button", `storybook-button--storybook-button--primary`,
    // `storybook-button--${mode}`,
    "storybook-button--primary"
    // mode,
    ].join(" "),
    style: backgroundColor && {
      backgroundColor
    }
  }, props), label);
};
exports.Button = Button;
Button.propTypes = {
  // /**
  //  * Is this the principal call to action on the page?
  //  */
  // primary: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: _propTypes.default.string,
  /**
   * How large should the button be?
   */
  size: _propTypes.default.oneOf(["small", "medium", "large"]),
  /**
   * Button contents
   */
  label: _propTypes.default.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: _propTypes.default.func
};
Button.defaultProps = {
  backgroundColor: null,
  // primary: false,
  size: "medium",
  onClick: undefined
};
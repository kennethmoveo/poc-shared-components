"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Button;
var _react = _interopRequireDefault(require("react"));
var _propTypes = _interopRequireDefault(require("prop-types"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
function Button(_ref) {
  let {
    label,
    onClick
  } = _ref;
  return (
    /*#__PURE__*/
    // <button onClick={onClick} style={backgroundColor && { backgroundColor }}>
    _react.default.createElement("button", {
      onClick: onClick
    }, label)
  );
}
Button.propTypes = {
  label: _propTypes.default.string.isRequired,
  onClick: _propTypes.default.func
};
Button.defaultProps = {
  onClick: undefined
};
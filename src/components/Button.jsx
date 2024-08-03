import React from "react";
import PropTypes from "prop-types";

export default function Button({ label, onClick }) {
	return (
		// <button onClick={onClick} style={backgroundColor && { backgroundColor }}>
		<button onClick={onClick}>{label}</button>
	);
}

Button.propTypes = {
	label: PropTypes.string.isRequired,
	onClick: PropTypes.func,
};

Button.defaultProps = {
	onClick: undefined,
};

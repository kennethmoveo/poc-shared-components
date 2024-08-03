import React from 'react';
const Button = (props) => {
	const mode = primary
		? "storybook-button--primary"
		: "storybook-button--secondary";
	return (
		<button
			type="button"
			className={[
				"storybook-button",
				`storybook-button--${mode}`,
				"storybook-button--primary",
				mode,
			].join(" ")}
			style={backgroundColor && { backgroundColor }}
			{...props}
		>
			{label}
		</button>
}

Button.propTypes = {
	/**
	 * Is this the principal call to action on the page?
	 */
	primary: PropTypes.bool,
	/**
	 * What background color to use
	 */
	backgroundColor: PropTypes.string,
	/**
	 * How large should the button be?
	 */
	size: PropTypes.oneOf(["small", "medium", "large"]),
	/**
	 * Button contents
	 */
	label: PropTypes.string.isRequired,
	/**
	 * Optional click handler
	 */
	onClick: PropTypes.func,
};

Button.defaultProps = {
	backgroundColor: null,
	primary: false,
	size: "medium",
	onClick: undefined,
};

export default Button;
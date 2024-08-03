import React from "react";
const Button = (props) => {
	// const mode = props.primary
	// 	? "storybook-button--primary"
	// 	: "storybook-button--secondary";
	return (
		<button
			type="button"
			className={[
				"storybook-button",
				// `storybook-button--${props.mode}`,
				"storybook-button--primary",
				"storybook-button--storybook-button--primary",
				// props.mode,
			].join(" ")}
			style={props.backgroundColor && { ...props.backgroundColor }}
			{...props}
		>
			{props.label}
		</button>
	);
};

export default Button;

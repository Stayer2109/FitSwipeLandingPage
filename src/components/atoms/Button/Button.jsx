import React from "react";
import "./Button.scss";

const Button = ({ isActive, onClick, title, className }) => {
	return (
		<>
			<button
				className={`${isActive} ${className ? className : "btn-default-style"}`}
				onClick={onClick}
			>
				{title}
			</button>
		</>
	);
};

export default Button;

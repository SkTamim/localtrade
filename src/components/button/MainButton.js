import React from "react";
import classes from "./MainButton.module.css";

const MainButton = (props) => {
	return props.href ? (
		props.lg ? (
			<a
				href={props.href}
				className={`${classes.mainBtnLg} ${
					props.className ? props.className : ""
				}`}
			>
				{props.children}
			</a>
		) : (
			<a
				href={props.href}
				className={`${classes.mainBtn} ${
					props.className ? props.className : ""
				}`}
			>
				{props.children}
			</a>
		)
	) : props.lg ? (
		<button
			className={`${classes.mainBtnLg} ${
				props.className ? props.className : ""
			}`}
		>
			{props.children}
		</button>
	) : (
		<button
			className={`${classes.mainBtn} ${props.className ? props.className : ""}`}
		>
			{props.children}
		</button>
	);
};

export default MainButton;

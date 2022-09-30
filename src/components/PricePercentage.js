import React from "react";
import classes from "./PricePercentage.module.css";

import { TbArrowUpRight } from "react-icons/tb";
import { TbArrowDownRight } from "react-icons/tb";

const PricePercentage = (props) => {
	return (
		<>
			{props.up && (
				<div className={classes.priceBoxUp}>
					+{props.children}% <TbArrowUpRight />
				</div>
			)}

			{props.down && (
				<div className={classes.priceBoxDown}>
					-{props.children}% <TbArrowDownRight />
				</div>
			)}
		</>
	);
};

export default PricePercentage;

import React from "react";
import classes from "./Hero.module.css";
import MainButton from "../../components/button/MainButton";

import heroImage from "../../images/hero-img.png";

const Hero = () => {
	return (
		<header className='container-xxl'>
			<div className={`row ${classes.wrapper}`}>
				<div className='col-lg-6 py-5 px-sm-5 border-start border-end border-color-dark'>
					<p className={classes.commission}>0% trading commission</p>
					<h1 className={classes.heroHeading}>
						Join the best cryptocurrency exchange
					</h1>
					<p className={classes.TradeInfo}>
						Trader with over 740 defferent cryptocurrency and fiat <br />
						currency pairs, including Bitcoin, Ethereum and BNB pairs.
					</p>
					<MainButton lg>Start Trading</MainButton>
				</div>
				<div className='col-lg-6 border-end border-color-dark text-center'>
					<img src={heroImage} alt='Hero Mobile Photo' />
				</div>
			</div>
		</header>
	);
};

export default Hero;

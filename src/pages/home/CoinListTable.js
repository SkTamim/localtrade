import React from "react";
import Chart from "../../components/Chart";
import PricePercentage from "../../components/PricePercentage";
import classes from "./CoinListTable.module.css";

import coinImage1 from "../../images/bnb.png";
import coinImage2 from "../../images/bitcoin.png";
import coinImage3 from "../../images/ethereum.png";

const CoinListTable = () => {
	const firstChartData = [
		84.85, 85.75, 80.5, 75.0, 70.05, 75.75, 79.76, 85.75, 90.45, 93.0, 96.85,
		98.8, 100.85, 104.65, 109.0, 112.76, 115.05, 110.05, 95.05, 93.05, 90.05,
		88.05, 85.05, 80.05, 83.05,
	];
	return (
		<section className={classes.coinListSection}>
			<div className='container-xxl py-5 px-sm-5 border-start border-end border-color-dark'>
				<div className='table-responsive'>
					<table className={classes.coinTable}>
						<thead>
							<tr>
								<td>
									<p className='text-muted'>Market</p>
								</td>
								<td>
									<p className='text-muted'>Price</p>
								</td>
								<td>
									<p className='text-muted'>Change 24H</p>
								</td>
								<td>
									<p className='text-muted'>Dynamic</p>
								</td>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>
									<div className={classes.marketRow}>
										<div className={classes.coinImageWrap}>
											<img src={coinImage1} alt='Coin Image' />
										</div>
										<h5>
											BNB <span className='fw-normal'>(Binance Coin)</span>
										</h5>
									</div>
								</td>
								<td>
									<div className={classes.priceRow}>
										<h5 className='fw-bold'>297,28</h5>
									</div>
								</td>
								<td>
									<div className={classes.changeRow}>
										<PricePercentage up>12,19</PricePercentage>
									</div>
								</td>
								<td className={classes.dynamicRow}>
									<div>
										<Chart chartData={firstChartData} up />
									</div>
								</td>
							</tr>

							<tr>
								<td>
									<div className={classes.marketRow}>
										<div className={classes.coinImageWrap}>
											<img src={coinImage2} alt='Coin Image' />
										</div>
										<h5>
											BTC <span className='fw-normal'>(Bitcoin)</span>
										</h5>
									</div>
								</td>
								<td>
									<div className={classes.priceRow}>
										<h5 className='fw-bold'>34 564,80</h5>
									</div>
								</td>
								<td>
									<div className={classes.changeRow}>
										<PricePercentage down>24,77</PricePercentage>
									</div>
								</td>
								<td className={classes.dynamicRow}>
									<div>
										<Chart chartData={firstChartData} down />
									</div>
								</td>
							</tr>

							<tr>
								<td>
									<div className={classes.marketRow}>
										<div className={classes.coinImageWrap}>
											<img src={coinImage3} alt='Coin Image' />
										</div>
										<h5>
											ETH <span className='fw-normal'>(Etherium)</span>
										</h5>
									</div>
								</td>
								<td>
									<div className={classes.priceRow}>
										<h5 className='fw-bold'>2 117,09</h5>
									</div>
								</td>
								<td>
									<div className={classes.changeRow}>
										<PricePercentage up>2,59</PricePercentage>
									</div>
								</td>
								<td className={classes.dynamicRow}>
									<div>
										<Chart chartData={firstChartData} up />
									</div>
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</section>
	);
};

export default CoinListTable;

import React from "react";
import { ResponsiveContainer, AreaChart, Area, Tooltip } from "recharts";

const Chart = (props) => {
	let data = [
		{ time: "12.00 am", price: 84.85 },
		{ time: "1.00 am", price: 85.75 },
		{ time: "2.00 am", price: 80.5 },
		{ time: "3.00 am", price: 75.0 },
		{ time: "4.00 am", price: 65.05 },
		{ time: "5.00 am", price: 75.75 },
		{ time: "6.00 am", price: 79.76 },
		{ time: "7.00 am", price: 85.75 },
		{ time: "8.00 am", price: 90.45 },
		{ time: "9.00 am", price: 93.0 },
		{ time: "10.00 am", price: 96.85 },
		{ time: "11.00 am", price: 98.8 },
		{ time: "12.00 pm", price: 100.85 },
		{ time: "13.00 pm", price: 104.65 },
		{ time: "14.00 pm", price: 110.0 },
		{ time: "15.00 pm", price: 114.76 },
		{ time: "16.00 pm", price: 120.05 },
		{ time: "17.00 pm", price: 100.05 },
		{ time: "18.00 pm", price: 95.05 },
		{ time: "19.00 pm", price: 93.05 },
		{ time: "20.00 pm", price: 90.05 },
		{ time: "21.00 pm", price: 88.05 },
		{ time: "22.00 pm", price: 85.05 },
		{ time: "23.00 pm", price: 80.05 },
		{ time: "24.00 pm", price: 83.05 },
	];

	data = data.map((item, index) => {
		return { ...item, price: props.chartData[index] };
	});

	if (props.up) {
		return (
			<ResponsiveContainer width={180} height={50}>
				<AreaChart data={data}>
					<defs>
						<linearGradient id='color' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='0%' stopColor='#5ec07f' stopOpacity={0.4}></stop>
							<stop offset='75%' stopColor='#5ec07f' stopOpacity={0.05}></stop>
						</linearGradient>
					</defs>

					<Area dataKey='price' stroke='#5ec07f' fill='url(#color)' />
					<Tooltip content={<CustomTooltip />} />
				</AreaChart>
			</ResponsiveContainer>
		);
	}
	if (props.down) {
		return (
			<ResponsiveContainer width={180} height={50}>
				<AreaChart data={data}>
					<defs>
						<linearGradient id='colorDown' x1='0' y1='0' x2='0' y2='1'>
							<stop offset='0%' stopColor='#f94a2b' stopOpacity={0.4}></stop>
							<stop offset='75%' stopColor='#f94a2b' stopOpacity={0.05}></stop>
						</linearGradient>
					</defs>

					<Area dataKey='price' stroke='#f94a2b' fill='url(#colorDown)' />
					<Tooltip content={<CustomTooltip />} />
				</AreaChart>
			</ResponsiveContainer>
		);
	}
};

export default Chart;

function CustomTooltip({ active, payload }) {
	if (active) {
		return (
			<div className='chartTooltip'>
				<p>{payload[0].payload.time}</p>
				<p>Pirce: ${payload[0].payload.price}</p>
			</div>
		);
	}
	return null;
}

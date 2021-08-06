import React from 'react';
import ReactApexChart from 'react-apexcharts'

class Apexchart extends React.Component {
	constructor(props) {
		super(props);


		this.state = {
			series: [{ data: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] }],
			// series: [{data:["LEAD APPROVAL","LEAD DROPPED", "OPPORTUNITY CREATION", "MANUAL FEASIBILITY",]}],
			options: {
				chart: { type: 'bar', height: 400 },
				plotOptions: { bar: { horizontal: true, } },
				dataLabels: { enabled: true },
				xaxis: {
					categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
						'United States', 'China', 'Germany'
					],
				}

			},
		};
	}

	componentDidMount() {

	}
	render() {
		return (
			<div id="chart">
				<ReactApexChart options={this.state.options} series={this.state.series} type="bar" height={350} />
			</div>
		)
	}
}
export default Apexchart
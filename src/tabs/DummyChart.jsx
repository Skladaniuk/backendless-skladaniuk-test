import {VictoryPie} from 'victory';
import scss from './DummyChart.module.scss';

const DummyChart = () =>{

	const data = [
		{x: 1, y: 100},
		
	];

	const chartStyle = {
		parent: {width: '400px', height: '400px'} 
	};

	return(
		<div>
			<div className={scss.dummyChart}>
				<span>Dummy Chart</span>
				<span className={scss.percent}>100%</span>
			</div>
			<VictoryPie className = {scss.pie} colorScale={["#8FD7C1"]} data = {data} style={chartStyle}/>
		</div>
	);
};

export default DummyChart;
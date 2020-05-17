import React from 'react';
import Chart from 'react-google-charts';
import { Paper } from '@material-ui/core';
const ChartWrapper = (props) => {
	const getPoints = (id, value) => {
		if (props.likesMap[id]) {
			return props.likesMap[id];
		}
		return value;
	}
	let cData = props.data && props.data.map((news) => [news.objectID, getPoints(news.objectID, news.points)]);
	if (cData) {
		cData.unshift(['Id',
			'Upvotes'])
	}
	return <Paper>
		<Chart
			style={{ padding: 10 }}
			width={'100%'}
			height={'100%'}
			chartType="Line"
			loader={<div>Loading Chart</div>}
			data={cData}
			options={{
				chart: {
					title: 'Hacker News',
					subtitle: 'Upvotes',
				},
			}}
			rootProps={{ 'data-testid': '3' }}
		/>
	</Paper>
}
export default ChartWrapper;
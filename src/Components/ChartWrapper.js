import React from 'react';
import Chart from 'react-google-charts';
export const ChartWrapper = (props) => {
	const getPoints = (id, value) => {
		if (props.likesMap[id]) {
			return props.likesMap[id];
		}
		return value;
	}
	let cData = props.data && props.data.map((news) => [news.objectID, getPoints(news.objectID, news.points)]);
	if (cData) {
		cData.unshift(['News Id',
			'Likes'])
	}
	return <Chart
		width={'600px'}
		height={'400px'}
		chartType="Line"
		loader={<div>Loading Chart</div>}
		data={cData}
		options={{
			chart: {
				title: 'Hacker News',
				subtitle: 'Likes',
			},
		}}
		rootProps={{ 'data-testid': '3' }}
	/>
}
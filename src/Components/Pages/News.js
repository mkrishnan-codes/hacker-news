import React, { Fragment, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NewsItem } from './NewsItem';
import { Grid, Button, useMediaQuery, useTheme, Typography } from '@material-ui/core';
import { updatePage } from '../../redux/reducer';
import { restoreLikes } from '../../redux/reducer';
import Chart from 'react-google-charts';


export const News = () => {
	const { data, page, pages, likesMap } = useSelector((state) => state);
	const dispatch = useDispatch();
	useEffect(() => {
		if (localStorage.getItem('likesMap')) {
			dispatch(
				restoreLikes(JSON.parse(localStorage.getItem('likesMap')))
			)
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('md'));
	return (
		<Fragment>
			<Grid container spacing={3} >
				{matches && (
					<Fragment><Grid item xs={0} lg={1} md={1}>
						<Typography variant="subtitle2" gutterBottom>
							Comments
      					</Typography>
					</Grid>
						<Grid item xs={0} lg={1} md={1}>
							<Typography variant="subtitle2" gutterBottom>
								Ponts
      					</Typography>
						</Grid>
						<Grid item xs={0} lg={1} md={1}>
							<Typography variant="subtitle2" gutterBottom>
								Upvote
      					</Typography>
						</Grid>
					</Fragment>)
				}
				<Grid item xs={12} lg={9} md={9}>
					<Typography variant="subtitle2" gutterBottom>
						News details
      					</Typography>
				</Grid>
			</Grid>
			<Grid container spacing={1} >
				{
					data && data.map((news) => <NewsItem
						likeCount={likesMap[news.objectID] ? likesMap[news.objectID] : news.points}
						key={news.objectID}
						{...news} />)
				}
			</Grid>

			<Grid container justify="flex-end">
				<Grid item>
					<Button disabled={page === 0} onClick={() => dispatch(updatePage(page - 1))}>Previous</Button>
				</Grid>
				<Grid item>
					<Button disabled={pages - 2 < page} onClick={() => dispatch(updatePage(page + 1))}>Next</Button>
				</Grid>
			</Grid>

			<Chart
  width={'600px'}
  height={'400px'}
  chartType="Line"
  loader={<div>Loading Chart</div>}
  data={[
    [
      'Day',
      'Guardians of the Galaxy',
      'The Avengers',
      'Transformers: Age of Extinction',
    ],
    [1, 37.8, 80.8, 41.8],
    [2, 30.9, 69.5, 32.4],
    [3, 25.4, 57, 25.7],
    [4, 11.7, 18.8, 10.5],
    [5, 11.9, 17.6, 10.4],
    [6, 8.8, 13.6, 7.7],
    [7, 7.6, 12.3, 9.6],
    [8, 12.3, 29.2, 10.6],
    [9, 16.9, 42.9, 14.8],
    [10, 12.8, 30.9, 11.6],
    [11, 5.3, 7.9, 4.7],
    [12, 6.6, 8.4, 5.2],
    [13, 4.8, 6.3, 3.6],
    [14, 4.2, 6.2, 3.4],
  ]}
  options={{
    chart: {
      title: 'Box Office Earnings in First Two Weeks of Opening',
      subtitle: 'in millions of dollars (USD)',
    },
  }}
  rootProps={{ 'data-testid': '3' }}
/>
		</Fragment>
	);
}

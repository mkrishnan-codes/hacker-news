import React, { Fragment, useEffect, Suspense } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NewsItem } from './NewsItem';
import { Grid, Button, useMediaQuery, useTheme, Typography, CircularProgress } from '@material-ui/core';
import { updatePage } from '../redux/reducer';
import { restoreLikes } from '../redux/reducer';
const ChartWrapper = React.lazy(() => import('./ChartWrapper'));

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
				<Grid style={{ padding: 10 }} container justify="flex-end">
					<Grid item>
						<Button disabled={page === 0} onClick={() => dispatch(updatePage(page - 1))}>Previous</Button>
					</Grid>
					<Grid item>
						<Button disabled={pages - 2 < page} onClick={() => dispatch(updatePage(page + 1))}>Next</Button>
					</Grid>
				</Grid>
			</Grid>
			<Suspense fallback={<CircularProgress />}>
				<ChartWrapper data={data} likesMap={likesMap} />
			</Suspense>

		</Fragment>
	);
}
export default News;

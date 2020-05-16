import React, { Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NewsItem } from './NewsItem';
import { Grid, Button, useMediaQuery, useTheme, Typography } from '@material-ui/core';
import { updatePage } from '../../redux/reducer';


export const News = () => {
	const { data, page, pages } = useSelector((state) => state);
	const theme = useTheme();
	const matches = useMediaQuery(theme.breakpoints.up('md'));
	const dispatch = useDispatch();
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
						key={news.objectID}
						{...news} />)
				}
			</Grid>

			<Grid container justify="flex-end">
				<Grid item>
					<Button disabled={page === 0} onClick={() => dispatch(updatePage(page - 1))}>Previous</Button>
				</Grid>
				<Grid item>

					<Button disabled={pages < page - 1} onClick={() => dispatch(updatePage(page + 1))}>Next</Button>
				</Grid>
			</Grid>
		</Fragment>
	);
}

import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { Grid, IconButton, Paper } from '@material-ui/core';
import { ThumbUpOutlined, VisibilityOff } from '@material-ui/icons';
import { useDispatch } from 'react-redux';
import { like, hide } from '../redux/reducer';
const useStyles = makeStyles({
    root: {
        paddingLeft: 10,
        paddingTop: 10,
        paddingRight: 10,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export const NewsItem = (props) => {
    const classes = useStyles();
    const dispatch = useDispatch();

    return !props.hidden && (
        <Grid item xs={12}>
            <Paper className={classes.root}>
                <Grid container spacing={3} alignItems="center">
                    <Grid item xs={4} lg={1} md={1}>
                        <Typography variant="body2" component="p">
                            {props.num_comments}
                        </Typography>
                    </Grid>

                    <Grid item xs={4} lg={1} md={1}>
                        <Typography variant="body2" component="p">
                            {props.likeCount}
                        </Typography>
                    </Grid>

                    <Grid item xs={4} lg={1} md={1}>
                        <IconButton onClick={() => dispatch(like(props.objectID))} color="primary" aria-label="upvote" component="span">
                            <ThumbUpOutlined fontSize="small" />
                        </IconButton>
                    </Grid>



                    <Grid item xs={12} lg={8} md={8}>
                        <Typography variant="body2" component="p">
                            {props.title}
                        </Typography>
                    </Grid>
                    <Grid item xs={4} lg={1} md={1}>
                        <IconButton onClick={() => dispatch(hide(props.objectID))} color="primary" aria-label="upvote" component="span">
                            <VisibilityOff fontSize="small" />
                        </IconButton>
                    </Grid>

                </Grid>
            </Paper>
        </Grid>
    );
}
NewsItem.propTypes = {
    title: PropTypes.string,
    url: PropTypes.string,
    platform: PropTypes.string,
    score: PropTypes.number,
    genre: PropTypes.string,
    editors_choice: PropTypes.string,
    release_year: PropTypes.number
}
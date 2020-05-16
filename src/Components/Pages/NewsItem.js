import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
const useStyles = makeStyles({
    root: {
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

    return (
        <Grid item xs={12}>
            <Card className={classes.root}>
                <CardContent>
                    <Grid container spacing={3}>
                        <Grid item xs={4} lg={1} md={1}>
                            <Typography variant="body2" component="p">
                                {props.num_comments}
                            </Typography>
                        </Grid>

                        <Grid item xs={4} lg={1} md={1}>
                            <Typography variant="body2" component="p">
                                {props.points}
                            </Typography>
                        </Grid>

                        <Grid item xs={4} lg={1} md={1}>
                            <Typography variant="body2" component="p">
                                {props.num_comments}
                            </Typography>
                        </Grid>



                        <Grid item xs={12} lg={9} md={9}>
                            <Typography variant="body2" component="p">
                                Year {props.title}
                            </Typography>
                        </Grid>


                    </Grid>
                </CardContent>
            </Card>
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
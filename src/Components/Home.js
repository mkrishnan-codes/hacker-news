import React, { useEffect, Suspense } from 'react';
import { fade, makeStyles } from '@material-ui/core/styles';
import { GET as GETDATA } from '../services/api';
import { fillNews } from '../redux/reducer';
import { useDispatch, useSelector } from 'react-redux';

import { Toolbar, AppBar, Container, Box, CssBaseline, CircularProgress, Typography } from '@material-ui/core';
const News = React.lazy(() => import('./News'));
const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sel: {
    color: theme.palette.common.white
  }


}));

export default function MainPage(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { page } = useSelector((state) => state);

  useEffect(() => {
    if (props.load) {
      async function initDataCall() {
        const data = await GETDATA({ tags: 'front_page', page });
        if (data) {
          dispatch(fillNews(data));
        }
      }
      initDataCall();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="fixed">
        <Toolbar>
          <Typography aria-label="Hacker News" className={classes.title} variant="h6" noWrap>
            Hacker News
          </Typography>

        </Toolbar>
      </AppBar>
      <Toolbar />
      <Container>
        <Box my={2}>
          {
            props.load &&
            <Suspense fallback={<CircularProgress />}>
              <News />
            </Suspense>
          }
        </Box>

      </Container>
    </React.Fragment>


  );
}

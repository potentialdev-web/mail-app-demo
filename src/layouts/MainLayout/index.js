import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core';
import TopBar from './TopBar';

const useStyles = makeStyles((theme) => ({
root: {
		backgroundColor: theme.palette.background.dark,
		display: 'flex',
		height: '100%',
		overflow: 'hidden',
		width: '100%'
	},
	wrapper: {
		display: 'flex',
		flex: '1 1 auto',
		overflow: 'hidden',
		paddingTop: 47
	},
	contentContainer: {
		display: 'flex',
		flex: '1 1 auto',
		overflow: 'hidden'
	},
	content: {
		flex: '1 1 auto',
		height: '100%',
		overflow: 'auto',
		padding: 16
	}
}));

const Layout = ({ children }) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar />
      <div className={classes.wrapper}>
        <div className={classes.contentContainer}>
          <div className={classes.content}>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;

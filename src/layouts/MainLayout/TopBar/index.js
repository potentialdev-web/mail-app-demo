import React, { useRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  AppBar,
  Avatar,
  Box,
  ButtonBase,
  Hidden,
  Toolbar,
  Typography,
  makeStyles
} from '@material-ui/core';
import Logo from '../../../components/Logo';
import { THEMES, USER } from '../../../constants';
import Settings from './Settings';

const useStyles = makeStyles((theme) => ({
  root: {
    zIndex: theme.zIndex.drawer + 100,
    ...theme.name === THEMES.LIGHT ? {
      boxShadow: 'none',
      backgroundColor: theme.palette.primary.main
    } : {},
    ...theme.name === THEMES.ONE_DARK ? {
      backgroundColor: theme.palette.background.default
    } : {}
  },
  toolbar: {
    minHeight: 47
  },
  avatar: {
    height: 24,
    width: 24,
    marginRight: theme.spacing(1)
  }
}));

const TopBar = ({
  className,
  ...rest
}) => {
  const classes = useStyles();
  const ref = useRef(null);

  return (
    <AppBar
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Toolbar className={classes.toolbar}>
        <RouterLink to="/">
					<Logo width="32" height="32" />
        </RouterLink>
        <Box
          ml={2}
          flexGrow={1}
        />
        <Settings />
        <Box
          display="flex"
          alignItems="center"
          component={ButtonBase}
          ref={ref}
        >
          <Avatar
            alt="User"
            className={classes.avatar}
            src={USER.avatar}
          />
          <Hidden smDown>
            <Typography
              variant="body2"
              color="inherit"
            >
              {USER.name}
            </Typography>
          </Hidden>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

TopBar.propTypes = {
  className: PropTypes.string
};

export default TopBar;

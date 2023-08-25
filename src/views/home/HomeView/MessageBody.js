import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';

import {
  Box,
  Card,
  CardContent,
  CardHeader,
  Container,
  Divider,
  Grid,
  makeStyles,
  TextField
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto'
  }
}));

const MessageBody = ({
  className,
  ...rest
}) => {
  const classes = useStyles();

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Body" />
      <Divider />
      <CardContent>
        
      </CardContent>
    </Card>
  );
};

export default MessageBody;

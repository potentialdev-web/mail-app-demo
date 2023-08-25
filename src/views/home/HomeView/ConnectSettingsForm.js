import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Collapse,
  Divider,
  Grid,
  IconButton,
  LinearProgress,
  TextField,
  SvgIcon,
  makeStyles,
  Typography
} from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {},
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  }
}));

const ConnectSettingsForm = ({
  className,
  settings,
  ...rest
}) => {
  const classes = useStyles();
  const [emailSettings, setSettings] = useState({
    serverType: null,
    encryption: null,
    server: null,
    port: null,
    username: null,
    password: null
  });
  const [isConnecting, setConnecting] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader
        action={
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="expand settings"
            size="small"
          >
            <ExpandMoreIcon />
          </IconButton>
        }
        title={
          <Box display="flex">
            <Typography variant="h5">
              Email Config
            </Typography>
            <Box ml={1}>
              <SvgIcon fontSize="small" htmlColor="#008080">
                <CheckCircleOutlineIcon />
              </SvgIcon>
            </Box>
          </Box>
        }
      >
        <Typography>Test</Typography>
      </CardHeader>
      <Divider />
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                label="Server Type"
                fullWidth
                select
                SelectProps={{ native: true }}
                variant="outlined"
              >
                <option>
                  Type 1
                </option>
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Encryption"
                fullWidth
                select
                SelectProps={{ native: true }}
                variant="outlined"
              >
                <option>
                  Encryption 1
                </option>
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Server"
                fullWidth
                defaultValue="imap.gmx.com"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Port"
                fullWidth
                defaultValue="993"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Username"
                fullWidth
                defaultValue="gavlyin"
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                label="Password"
                fullWidth
                defaultValue="qwer1234qwer1234"
                type="password"
                variant="outlined"
              />
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          p={2}
          display="flex"
          justifyContent="flex-end"
        >
          <Button
            color="secondary"
            disabled={isConnecting}
            variant="contained"
          >
            Start
          </Button>
        </Box>
      </Collapse>
    </Card>
  );
};

ConnectSettingsForm.propTypes = {
  className: PropTypes.string,
  settings: PropTypes.object.isRequired
};

export default ConnectSettingsForm;

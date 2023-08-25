import React, { useState } from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import PerfectScrollbar from 'react-perfect-scrollbar';
import moment from 'moment';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  Hidden,
  IconButton,
  InputAdornment,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
  Tooltip,
  Typography,
  SvgIcon,
  makeStyles
} from '@material-ui/core';
import DoneIcon from '@material-ui/icons/Done';
import DeleteIcon from '@material-ui/icons/Delete';
import SearchIcon from '@material-ui/icons/Search';

const applyFilters = (messages, query) => {
  console.log('apply filter', messages);
  return messages && messages.length > 0 && messages.filter((message) => {
    let matches = true;

    if (query) {
      const properties = ['title', 'name'];
      let containsQuery = false;

      properties.forEach((property) => {
        if (message[property].toLowerCase().includes(query.toLowerCase())) {
          containsQuery = true;
        }
      });

      if (!containsQuery) {
        matches = false;
      }
    }

    return matches;
  });
};

const applyPagination = (messages, page, limit) => {
  return messages && messages.length > 0 && messages.slice(page * limit, page * limit + limit);
};

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  },
  queryField: {
    width: '100%'
  },
  bulkOperations: {
    position: 'relative'
  },
  bulkActions: {
    paddingLeft: 4,
    paddingRight: 4,
    marginTop: 6,
    position: 'absolute',
    width: '100%',
    zIndex: 2,
    backgroundColor: theme.palette.background.default
  },
  bulkAction: {
    marginLeft: theme.spacing(2)
  },
  details: {
    [theme.breakpoints.up('md')]: {
      display: 'flex',
      alignItems: 'center',
      flexGrow: 1
    }
  },
  subject: {
    maxWidth: 150,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis'
  },
  message: {
    maxWidth: 150,
    flexGrow: 1,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    marginRight: 'auto'
  }
}));

const MessagesList = ({
  className,
  messages,
  ...rest
}) => {
  const classes = useStyles();
  const [selectedMessages, setSelectedMessages] = useState([]);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(5);
  const [query, setQuery] = useState('');

  const handleQueryChange = (event) => {
    event.persist();
    setQuery(event.target.value);
  };

  const handleSelectAllMessages = (event) => {
    setSelectedMessages(event.target.checked
      ? messages.map((message) => message.id)
      : []);
  };

  const handleSelectOneMessage = (event, messageId) => {
    if (!selectedMessages.includes(messageId)) {
      setSelectedMessages((prevSelected) => [...prevSelected, messageId]);
    } else {
      setSelectedMessages((prevSelected) => prevSelected.filter((id) => id !== messageId));
    }
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handleLimitChange = (event) => {
    setLimit(parseInt(event.target.value));
  };

  const filteredMessages = applyFilters(messages, query);console.log('filtered', filteredMessages);
  const paginatedMessages = applyPagination(filteredMessages, page, limit);
  const enableBulkOperations = selectedMessages.length > 0;
  const selectedSomeMessages = selectedMessages.length > 0 && selectedMessages.length < messages.length;
  const selectedAllMessages = selectedMessages.length === messages.length;

  return (
    <Card
      className={clsx(classes.root, className)}
      {...rest}
    >
      <CardHeader title="Messages" />
      <Divider />
      <CardContent>
        <Box
          p={1}
          display="flex"
          alignItems="center"
        >
          <TextField
            className={classes.queryField}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SvgIcon
                    fontSize="small"
                    color="action"
                  >
                    <SearchIcon />
                  </SvgIcon>
                </InputAdornment>
              )
            }}
            onChange={handleQueryChange}
            placeholder="Search messages"
            value={query}
            variant="outlined"
          />
          <Box flexGrow={1} />
        </Box>
        {enableBulkOperations && (
          <div className={classes.bulkOperations}>
            <div className={classes.bulkActions}>
              <Checkbox
                checked={selectedAllMessages}
                indeterminate={selectedSomeMessages}
                onChange={handleSelectAllMessages}
              />
              <Button
                variant="outlined"
                className={classes.bulkAction}
              >
                Delete
              </Button>
              <Button
                variant="outlined"
                className={classes.bulkAction}
              >
                Mark as Read
              </Button>
            </div>
          </div>
        )}
        <PerfectScrollbar options={{ suppressScrollX: true }}>
          <Box minWidth={800} flexGrow={1}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedAllMessages}
                      indeterminate={selectedSomeMessages}
                      onChange={handleSelectAllMessages}
                    />
                  </TableCell>
                  <TableCell>
                    From
                  </TableCell>
                  <TableCell>
                    Body
                  </TableCell>
                  <TableCell>
                    Time
                  </TableCell>
                  <TableCell align="right">
                    Actions
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {paginatedMessages.length > 0 && paginatedMessages.map((message) => {
                  const isMessageSelected = selectedMessages.includes(message.id);

                  return (
                    <TableRow
                      hover
                      key={message.id}
                      selected={isMessageSelected}
                    >
                      <TableCell padding="checkbox">
                        <Checkbox
                          checked={isMessageSelected}
                          onChange={(event) => handleSelectOneMessage(event, message.id)}
                          value={isMessageSelected}
                        />
                      </TableCell>
                      <TableCell>
                        <Typography noWrap variant="subtitle2">
                          {message.from.name}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Box
                          minWidth="1px"
                          ml={1}
                          className={classes.details}
                        >
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            className={classes.subject}
                          >
                            {message.subject}
                          </Typography>
                          <Hidden smDown>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              className={classes.message}
                            >
                              <Box
                                component="span"
                                ml={2}
                              >
                                -
                              </Box>
                              {message.message}
                            </Typography>
                          </Hidden>
                        </Box>
                      </TableCell>
                      <TableCell>
                        {moment(message.createdAt).format('l')}
                      </TableCell>
                      <TableCell align="right">
                        <Box display="flex" justifyContent="flex-end">
                          <Tooltip title="Delete">
                            <IconButton size="small">
                              <SvgIcon fontSize="small">
                                <DeleteIcon />
                              </SvgIcon>
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Mark as Read">
                            <IconButton size="small">
                              <SvgIcon fontSize="small">
                                <DoneIcon />
                              </SvgIcon>
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </TableCell>
                    </TableRow>
                  );
                })}
                {
                  paginatedMessages.length === 0 && (
                    <TableRow>
                      <TableCell colSpan={5} align="center">
                        No Messages
                      </TableCell>
                    </TableRow>
                  )
                }
              </TableBody>
            </Table>
          </Box>
        </PerfectScrollbar>

        <TablePagination
          component="div"
          count={filteredMessages.length}
          onChangePage={handlePageChange}
          onChangeRowsPerPage={handleLimitChange}
          page={page}
          rowsPerPage={limit}
          rowsPerPageOptions={[5, 10, 25]}
        />
      </CardContent>
    </Card>
  );
};

MessagesList.propTypes = {
  className: PropTypes.string,
  messages: PropTypes.array.isRequired
};

MessagesList.defaultProps = {
  messages: []
};

export default MessagesList;

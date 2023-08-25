import React from 'react';
import { Router, Route } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import { SnackbarProvider } from 'notistack';
import {
  StylesProvider,
  ThemeProvider
} from '@material-ui/core';
import useSettings from './hooks/useSettings';
import GlobalStyles from './components/GlobalStyles';
import { createTheme } from './theme';
import routes, { renderRoutes } from './routes';

const history = createBrowserHistory();

const App = () => {
  const { settings } = useSettings();

  const theme = createTheme({
    theme: settings.theme
  });

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider>
        <SnackbarProvider
          dense
          maxSnack={3}
        >
          <Router history={history}>
            <GlobalStyles />
            {renderRoutes(routes)}
          </Router>
        </SnackbarProvider>
      </StylesProvider>
    </ThemeProvider>
  );
}

export default App;

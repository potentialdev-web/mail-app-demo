import _ from 'lodash';
import {
  colors,
  createMuiTheme,
  responsiveFontSizes
} from '@material-ui/core';
import { THEMES } from '../constants';
import typography from './typography';

const baseOptions = {
  typography,
  overrides: {
    MuiCardContent: {
      root: {
        display: 'flex',
        flexDirection: 'column',
        flexGrow: 1,
      },
    },
    MuiCard: {
      root: {
        display: 'flex',
        flexDirection: 'column'
      }
    },
    MuiTablePagination: {
      root: {
        overflow: 'hidden'
      }
    }
  }
};

const themesOptions = [
  {
    name: THEMES.LIGHT,
    overrides: {
      MuiInputBase: {
        input: {
          '&::placeholder': {
            opacity: 1,
            color: colors.blueGrey[600]
          }
        }
      }
    },
    palette: {
      type: 'light',
      action: {
        active: colors.blueGrey[600]
      },
      background: {
        default: colors.common.white,
        dark: '#f4f6f8',
        paper: colors.common.white
      },
      primary: {
        main: colors.indigo[600]
      },
      secondary: {
        main: '#5850EC'
      },
      text: {
        primary: colors.blueGrey[900],
        secondary: colors.blueGrey[600]
      }
    },
  },
  {
    name: THEMES.ONE_DARK,
    palette: {
      type: 'dark',
      action: {
        active: 'rgba(255, 255, 255, 0.54)',
        hover: 'rgba(255, 255, 255, 0.04)',
        selected: 'rgba(255, 255, 255, 0.08)',
        disabled: 'rgba(255, 255, 255, 0.26)',
        disabledBackground: 'rgba(255, 255, 255, 0.12)',
        focus: 'rgba(255, 255, 255, 0.12)'
      },
      background: {
        default: '#282C34',
        dark: '#1c2025',
        paper: '#282C34'
      },
      primary: {
        main: '#8a85ff'
      },
      secondary: {
        main: '#8a85ff'
      },
      text: {
        primary: '#e6e5e8',
        secondary: '#adb0bb'
      }
    }
  }
];

export const createTheme = (config = {}) => {
  let themeOptions = themesOptions.find((theme) => theme.name === config.theme);

  if (!themeOptions) {
    console.warn(new Error(`The theme ${config.theme} is not valid`));
    [themeOptions] = themesOptions;
  }

  let theme = createMuiTheme(
    _.merge(
      {},
      baseOptions,
      themeOptions
    )
  );

  return theme;
}

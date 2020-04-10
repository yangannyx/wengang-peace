import React from 'react';
import { createStyled } from "styletron-react";
import { driver, getInitialStyle } from "styletron-standard";

const THEME = {
  colors: {
    dark01: '#020202',
    dark02: '#171738',
    mid01: '#424874',
    color01: '#584D9E',
    light01: '#ECEBE4',
  },
  flex: {
    row: {
      display: 'flex',
    },
    col: {
      display: 'flex',
      flexDirection: 'column',
    },
    centered: {
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  sizing: {
    scale0: '2px',
    scale100: '4px',
    scale200: '6px',
    scale300: '8px',
    scale400: '10px',
    scale500: '12px',
    scale550: '14px',
    scale600: '16px',
    scale650: '18px',
    scale700: '20px',
    scale750: '22px',
    scale800: '24px',
    scale900: '32px',
    scale1000: '40px',
    scale1200: '48px',
    scale1400: '56px',
    scale1600: '64px',
    scale2400: '96px',
    scale3200: '128px',
    scale4800: '192px',
  },
  typography: {
    font100: {
      fontFamily: {
        src: 'url("src/static/fonts/CormorantGaramond-Regular.ttf")',
      },
      fontSize: '11px',
      fontWeight: 'normal',
      lineHeight: '16px',
    },
    font200: {
      fontFamily: {
        src: 'url("./../../static/fonts/CormorantGaramond-Regular.ttf")',
      },
      fontSize: '12px',
      fontWeight: 'normal',
      lineHeight: '20px'
    },
    font300: {
      fontFamily: {
        src: 'url("./../../static/fonts/CormorantGaramond-Regular.ttf")',
      },
      fontSize: '14px',
      fontWeight: 'normal',
      lineHeight: '20px'
    },
    font1000: {
      fontFamily: {
        src: 'url("../static/fonts/CormorantGaramond-Regular.ttf") format("truetype")',
      },
      fontSize: '40px',
      fontWeight: '200',
      lineHeight: '96px',
    },
  },
};

const { Provider, Consumer } = React.createContext();

export const ThemeProvider = ({ children }) => (
  <Provider value={THEME}>{children}</Provider>
);

const wrapper = StyledComponent =>
  function withThemeHOC(props) {
    return (
      <Consumer>
        {theme => <StyledComponent {...props} $theme={theme} />}
      </Consumer>
    );
  };

export const styled = createStyled({ wrapper, getInitialStyle, driver });

import { extendTheme } from '@chakra-ui/react';
import colors from 'theme/colors';
// import Text from 'theme/text';
// import Heading from 'theme/heading';
// import Button from './components/button';

const customTheme = {
  initialColorMode: 'light',
  useSystemColorMode: false,
  fonts: {
    heading:
      "'Noto Sans TC',-apple-system,'Montserrat',Arial,Roboto,PingFang TC, Sans-serif",
    body: "-apple-system, 'Montserrat',Arial,Roboto,'Noto Sans TC',PingFang TC, Sans-serif",
  },
  styles: {
    global: {
      body: {
        bg: 'main.500',
        color: 'white',
      },
    },
  },
  colors,

  components: {
    // Text,
    // Heading,
    // Button,
    Switch: {
      baseStyle: {
        track: {
          _focus: {
            boxShadow: 'none',
          },
        },
      },
    },
    Link: {
      baseStyle: {
        _hover: {
          textDecoration: 'none',
          color: 'grey.500',
        },
        // _active: {
        //   outline: '0px',
        // },
        _focus: {
          outline: '0px',
          boxShadow: 'unset',
        },
      },
    },
  },
};

const theme = extendTheme(customTheme);

export default theme;

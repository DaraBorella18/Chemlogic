import { extendTheme } from '@chakra-ui/react';
import { mode } from '@chakra-ui/theme-tools';

const Theme = extendTheme({
  styles: {
    global: () => ({
      fonts: {
        heading: `'Open Sans', sans-serif`,
        body: `'Montserrat', sans-serif`,
      },
      body: { 
        bg: mode('#f5f4f9', 'gray.900'),
      },
    }),
  },
});

export default Theme;
  
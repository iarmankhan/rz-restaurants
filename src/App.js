import React from 'react';
import {
  ChakraProvider,
  CSSReset,
  Box,
  Grid,
} from '@chakra-ui/core';
import theme from '@chakra-ui/theme';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <CSSReset />
      <Box textAlign="center" fontSize="xl">
        <Grid
          minH="100vh"
          p={3}
          direction="column"
          align="center"
          justify="center"
        >
          <ColorModeSwitcher justifySelf="flex-end" />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;

import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import Header from 'components/Header';
import Sections from 'components/Sections';
import theme from 'theme/theme';
import Footer from 'components/Footer';
import Router from 'routes';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Router />
      {/* <Sections /> */}
      <Footer />
    </ChakraProvider>
  );
}

export default App;

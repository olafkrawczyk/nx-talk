import { ChakraProvider } from '@chakra-ui/react';
import { AppProps } from 'next/app';
import Head from 'next/head';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Welcome to web-app!</title>
      </Head>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default CustomApp;

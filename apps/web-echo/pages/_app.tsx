import { ChakraProvider, Stack } from '@chakra-ui/react';
import { UiFooter } from '@nx-sample/ui/footer';
import { AppProps } from 'next/app';
import Head from 'next/head';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Welcome to web-echo!</title>
      </Head>
      <Stack height="100vh" justifyContent="space-between">
        <Component {...pageProps} />
        <UiFooter />
      </Stack>
    </ChakraProvider>
  );
}

export default CustomApp;

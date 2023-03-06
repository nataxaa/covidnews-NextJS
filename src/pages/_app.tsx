import {AppProps} from 'next/app'
import React from 'react'
import {ChakraProvider} from '@chakra-ui/react'
import { theme } from '../styles/theme'
import Header from '@/components/header'
import Sidebar from '@/components/sidebar'


function MyApp({ Component, pageProps }: AppProps) {
  
  return(
    <ChakraProvider theme={theme}>
      <Header/>
      <Sidebar/>
    <Component {...pageProps} />
    </ChakraProvider>
  ) 
}

export default MyApp
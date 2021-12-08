// import '../styles/global.scss'

import { AppProps } from "next/app"
import { Header } from '../components/Header'
import { GlobalStyle } from '../assets/styles/global'
import { Footer } from "../components/Footer"
import { AnimatePresence, motion } from "framer-motion"
import theme from "@chakra-ui/theme"
import { ChakraProvider } from "@chakra-ui/react"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
        <GlobalStyle />
        <Header />
        <Component {...pageProps} />
        <Footer />
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp

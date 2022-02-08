// import '../styles/global.scss'

import { AppProps } from "next/app"
import { Header } from '../components/Header'
import { colors, GlobalStyle } from '../assets/styles/global'
import { Footer } from "../components/Footer"
import { AnimatePresence, motion } from "framer-motion"
import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const shadows = {
  outline: `0 0 0 0.2rem ${colors.primaryYellow}`
}

const theme = extendTheme({ shadows })

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <AnimatePresence exitBeforeEnter>
        <GlobalStyle key="style" />
        <Header key="header" />
        <Component key="body" {...pageProps} />
        <Footer key="footer" />
      </AnimatePresence>
    </ChakraProvider>
  )
}

export default MyApp

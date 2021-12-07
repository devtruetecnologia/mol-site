// import '../styles/global.scss'

import { AppProps } from "next/app"
import { Header } from '../components/Header'
import { GlobalStyle } from '../assets/styles/global'
import { Footer } from "../components/Footer"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default MyApp

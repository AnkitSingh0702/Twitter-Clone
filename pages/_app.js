import '../styles/globals.css'
// import AuthContextProvider from "../Context/AuthContext";
import { SessionProvider } from 'next-auth/react'
function MyApp({ Component, pageProps: { session, ...pageProps} }) {
  return(  
  <SessionProvider session={session}>
  <Component {...pageProps} />
  </SessionProvider>

  )
}

export default MyApp

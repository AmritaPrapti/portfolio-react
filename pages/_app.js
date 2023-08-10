import Layout from '../components/layout'
import '../app/globals.css'
import { Inter } from 'next/font/google'
 
export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}
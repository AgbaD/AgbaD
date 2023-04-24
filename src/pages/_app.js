import { Footer, HireMe, Navbar } from '@/components';
import '@/styles/globals.css';
import { Raleway } from 'next/font/google';
import Head from 'next/head';

const relaway = Raleway({
  subsets: ["latin"],
  variable: "--font-rela"
})

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`${relaway.variable} font-rela bg-light dark:bg-dark w-full min-h-screen`}>
        <Navbar />
        <Component {...pageProps} />
        <HireMe />
        <Footer />
      </main>
    </>
  )
}

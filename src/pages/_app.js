import { Footer, HireMe, Navbar } from '@/components';
import '@/styles/globals.css';
import { AnimatePresence } from 'framer-motion';
import { Raleway } from 'next/font/google';
import Head from 'next/head';
import { useRouter } from 'next/router';

const relaway = Raleway({
  subsets: ["latin"],
  variable: "--font-rela"
})

export default function App({ Component, pageProps }) {
  const router = useRouter()

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={`${relaway.variable} font-rela bg-light dark:bg-dark w-full min-h-screen`}>
        <Navbar />
        <AnimatePresence mode='wait'>
          <Component key={router.asPath} {...pageProps} />
        </AnimatePresence>
        <HireMe />
        <Footer />
      </main>
    </>
  )
}

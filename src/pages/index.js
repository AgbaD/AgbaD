import { AnimatedText, Layout, LinkArrow } from '@/components'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/developer-pic-1.png';
import Link from 'next/link';
// import {} from '../../public/images/'

export default function Home() {
  return (
    <>
      <Head>
        <title>Damilare Agbabiaka | Home Page</title>
        <meta name="description" content="Damilare Agbabiaka Portfolio" />
      </Head>
      <main className='flex items-center text-dark w-full min-h-screen'>
        <Layout className='pt-0'>
          <div className='flex items-center justify-between w-full'>
            <div className='w-1/2'>
              <Image src={ profilePic } alt='blankgodd' className='w-full h-auto'/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center'>
              <AnimatedText text="Creating Value and Making Impact With Software." className='!text-6xl !text-left'/>
              <p className='my-4 text-base font-medium'>
                I've built scalable and reliable systems as a skilled backend engineer with growing expertise in blockchain technology.
                Explore my latest projects and articles, showcasing my expertise in software development and technical writing.
              </p>
              <AnimatedText text="DAMILARE AGBABIAKA A." className='!capitalise !text-4xl !text-left' />
              <div className='flex items-center self-start mt-2'>
                <Link href='/resume.pdf' target={"_blank"}
                className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark'
                >Resume <LinkArrow className='w-6 ml-1'/>
                </Link>

                <Link href="mailto:damilareagba1@gmail.com" target={"_blank"}
                className='ml-4 text-lg font-medium capitalize text-dark underline'
                >Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

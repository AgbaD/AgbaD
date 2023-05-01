import { AnimatedText, Layout, LinkArrow, TransitionEffect } from '@/components'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/digi-dev.png';
import Link from 'next/link';
// import {} from '../../public/images/'

export default function Home() {
  return (
    <>
      <Head>
        <title>Damilare Agbabiaka | Home Page</title>
        <meta name="description" content="Damilare Agbabiaka Portfolio" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark dark:text-light w-full min-h-screen'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col'>
            <div className='w-1/2 md:w-full'>
              <Image src={profilePic} alt='blankgodd' className='w-full h-auto lg:hidden md:inline-block md:w-full'
              priority 
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw'/>
            </div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Creating Value and Making Impact With Software." className='!text-6xl !text-left
              xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-4xl' />
              <p className='my-4 text-base font-medium md:text-sm sm:text-xs'>
                I've built scalable and reliable systems as a skilled backend engineer with growing expertise in blockchain technology.
                Explore my latest projects and articles, showcasing my expertise in software development and technical writing.
              </p>
              <AnimatedText text="DAMILARE AGBABIAKA A." className='!capitalise !text-4xl !text-left
              lg:!text-center sm:!text-3xl' />
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href='https://docs.google.com/document/d/1kraMYn-j6VoySjOiukyztftN9c6Zo2p_exLOnKyPObI/edit?usp=sharing'
                target={"_blank"}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                md:p-2 md:px-4 md:text-base'
                >Resume ↗</Link>

                <Link href="/projects"
                  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light
                  md:text-base'
                >Projects
                </Link>
              </div>
            </div>
          </div>
        </Layout>
      </main>
    </>
  )
}

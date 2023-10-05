import { AnimatedText, GithubIcon, Layout, TransitionEffect } from '@/components'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion'

import crowdfunding from '../../public/images/projects/crowdfunding.png';
import axeon from '../../public/images/projects/axeon.png';
import dex from '../../public/images/projects/dex.png';
import lp from '../../public/images/projects/lp.png';
import f2 from '../../public/images/projects/f2.png';
import kudibar from '../../public/images/projects/kudibar.png';
import pl from '../../public/images/projects/pl.png';
import tmm from '../../public/images/projects/tmm.png';
import vidor from '../../public/images/projects/vidor.png';
import papayr from '../../public/images/projects/papayr.png';
import yebora from '../../public/images/projects/yebora.png';
import alaajo from '../../public/images/projects/alaajo.png';
import fame from '../../public/images/projects/fame.png';
import sportstatix from '../../public/images/projects/sportstatix.png';


const FramerImage = motion(Image);

const FeaturedProject = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl
        border border-solid border-dark bg-light shadow-2xl p-12 relative
        rounded-br-2xl dark:bg-dark dark:border-light lg:flex-col lg:p-8 
        xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] 
            bg-dark rounded-br-3xl dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full 
            xs:rounded-[1.5rem]' />

            <Link href={link} target={'_blank'} className='w-1/2 cursor-pointer 
            overflow-hidden rounded-lg lg:w-full' >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }} 
                    priority 
                    sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw'
                />
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark
                xs:text-base'>{type}</span>
                <Link href={link} target={'_blank'} className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm
                    '>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target={'_blank'} className='w-10'><GithubIcon /></Link>
                    <Link href={link} target={'_blank'} className='ml-4 rounded-lg bg-dark text-light p-2
                    px-6 text-lg font-semibold hover:bg-light hover:text-dark hover:border hover:border-dark
                    dark:bg-light dark:text-dark hover:dark:text-light hover:dark:bg-dark hover:dark:border-light
                    sm:px-4 sm:text-base'
                    >Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const OtherProject = ({ type, title, img, link, github }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border
        border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light
        xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl
            dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
            <Link href={link} target={'_blank'} className='w-full cursor-pointer 
            overflow-hidden rounded-lg' >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }} 
                    priority 
                    sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw'
                />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark
                lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target={'_blank'} className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl 
                    '>{title}</h2>
                </Link>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target={'_blank'} className='text-dark dark:text-light
                    text-lg font-semibold underline md:text-base'>Visit</Link>
                    <Link href={github} target={'_blank'} className='w-7 md:w-6'><GithubIcon /></Link>
                </div>
            </div>
        </article>
    )
}

const Project = () => {
    return (
        <>
            <Head>
                <title>Damilare Agbabiaka | Projects Page</title>
                <meta name="description" content="Damilare Agbabiaka Portfolio - My Projects" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>

                <Layout className='pt-16'>
                    <AnimatedText text="Bringing Imagination To Life! 🚀" className='mb-16 lg:!text-7xl
                    sm:!text-6xl sm:mb-8 xs:!text-4xl' />
                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24
                    sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                type="Web2 || Backend || Fiber || Golang"
                                title="Vidor Inc"
                                summary="Access credit and manage credit seamlessly with Vidor."
                                link="https://vidor.io"
                                github="#"
                                img={vidor} />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <OtherProject
                                type="Web2 || Backend || Nest.js || Typescript"
                                title="Papayr"
                                link="https://papayr.com/"
                                github="#"
                                img={papayr} />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <OtherProject
                                type="Web2 || Backend || Django || Python"
                                title="Liberty Pay App"
                                link="https://www.libertypayng.com/"
                                github="#"
                                img={lp} />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <OtherProject
                                type="Web2 || Backend || Nest.js || Typescript"
                                title="Alaajo"
                                link="https://alaajo.com/"
                                github="#"
                                img={alaajo} />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <OtherProject
                                type="Web2 || Backend || Nest.js || Typescript"
                                title="Yebora"
                                link="https://www.yebora.com/"
                                github="#"
                                img={yebora} />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                type="Web3 || Fullstack || Solidity || React"
                                title="Decentralized Crowdfunding App"
                                summary="A blockchain based crowdfunding app."
                                link="https://crowd-funding-eth.vercel.app/"
                                github="https://github.com/AgbaD/crowdFunding-eth"
                                img={crowdfunding} />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <OtherProject
                                type="Web3 || Fullstack || Solidity || React"
                                title="Send Crypto Universally"
                                link="https://fame-tx.vercel.app/"
                                github="https://github.com/AgbaD/FameTx"
                                img={fame} />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <OtherProject
                                type="Web3 || Fullstack || Moralis || Typescript"
                                title="Decentralized Exchange"
                                link="https://blank-dex1-0.vercel.app/"
                                github="https://github.com/AgbaD/blank_dex_v1"
                                img={dex} />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                type="Web2 || Backend || Nest.js || Typescript"
                                title="SportStatix"
                                summary=" ultimate sports management platform dedicated to bringing African sports together."
                                link="https://www.sportstatix.com/"
                                github="#"
                                img={sportstatix} />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <OtherProject
                                type="Web2 || Backend || Nest.js || Typescript"
                                title="Kudibar"
                                link="https://kudibar.com/"
                                github="#"
                                img={kudibar} />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <OtherProject
                                type="Web2 || Backend || Nest.js || Typescript"
                                title="Axeon CMS"
                                link="https://axeon.io"
                                github="#"
                                img={axeon} />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <OtherProject
                                type="Web2 || Backend || ExpressJs || Typescript"
                                title="FirstFounders"
                                link="https://firstfounders.cc/"
                                github="#"
                                img={f2} />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <OtherProject
                                type="Web2 || Backend || ExpressJs || Javascript"
                                title="Pocket Lawyers"
                                link="https://www.pocketlawyers.io"
                                github="#"
                                img={pl} />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                type="Web2 || Fullstack || Python || Javascript"
                                title="TheMiddleMaan"
                                summary="A forum where (aspiring) professionals and clients can connect at the speed of light."
                                link="http://tmm.surge.sh/"
                                github="#"
                                img={tmm} />
                        </div>
                    </div>
                </Layout>

            </main>
        </>
    )
}

export default Project
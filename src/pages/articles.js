import { AnimatedText, Layout, TransitionEffect } from '@/components'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'

import a1 from '../../public/images/articles/a1.jpg';
import cogito from '../../public/images/articles/cogito.webp';


const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, tags, summary, link }) => {
    return (
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark
        rounded-2xl relative dark:bg-dark dark:border-light'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] 
            bg-dark rounded-br-3xl dark:bg-light' />
            <Link href={link} target={'_blank'} className='w-full cursor-pointer 
            overflow-hidden rounded-lg inline-block' >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }} 
                    priority 
                    sizes='(max-width: 768px) 100vw,
                    (max-width: 1200px) 50vw,
                    50vw'
                />
            </Link>
            <Link href={link} target={'_blank'}>
                <h2 className='text-2xl capitalize font-bold my-2 mt-4 hover:underline hover:underline-offset-2
                xs:text-lg'>
                    {title}
                </h2>
            </Link>
            <p className='text-sm mb-2'>{summary}</p>
            <span className='text-primary dark:text-primaryDark font-semibold'>{tags}</span>
        </li>
    )
}

const ArticleComp = ({ title, tag, link }) => {
    return (
        <motion.li initial={{ y: 200 }} whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
        viewport={{ once: true }} className='relative w-full p-4 py-6 my-4 rounded-2xl flex items-center 
        bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4
        dark:bg-dark dark:text-light dark:border-light sm:flex-col justify-between'>
            <Link href={link} target={'_blank'}>
                <h2 className='capitalize text-xl font-semibold hover:underline'>{title}</h2>
            </Link>
            <span className='text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start 
            sm:pl-0 xs:text-sm'>{tag}</span>
        </motion.li>
    )
}

const Articles = () => {
    return (
        <>
            <Head>
                <title>Damilare Agbabiaka | Articles Page</title>
                <meta name="description" content="Damilare Agbabiaka Portfolio - My Articles" />
            </Head>
            <TransitionEffect />
            <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Written Art, Painted Words. 🎨" className='mb-16 lg:!text-7xl
                    sm:!text-6xl sm:mb-8 xs:!text-4xl' />
                    <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16'>
                        <FeaturedArticle
                            title="Cogito Protocol: Revolutionizing Stablecoins with Sustainable Tracercoins and AI-Backed Stability"
                            summary="The cryptocurrency market is ever-changing, and as such, stablecoins have become a popular solution to the problem of volatility."
                            tags="#tracercoins #stablecoins #defi #ai"
                            link="https://medium.com/@singularitynetambassadors/cogito-protocol-revolutionizing-stablecoins-with-sustainable-tracercoins-and-ai-backed-stability-e3c0d03e7a5c"
                            img={cogito}
                        />
                        <FeaturedArticle
                            title="Exploring Web3, DeFi, NFTs, and DAOs: The Future of Digital Innovation"
                            summary="In this article, we will explore what web3, DeFi, NFTs, and DAOs are, and how they are shaping the future of our digital landscape."
                            tags="#web3 #defi # begineer #blockchain"
                            link="https://dev.to/blankgodd/exploring-web3-defi-nfts-and-daos-the-future-of-digital-innovation-4idc"
                            img={a1}
                        />
                    </ul>
                    <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
                    <ul>
                        <ArticleComp
                            title='Connecting to a MySQL database with SQLAlchemy'
                            tag='#mysql #ORM #sqlalchemy'
                            link="https://dev.to/blankgodd/connecting-to-a-mysql-database-with-sqlalchemy-lmc"
                        />
                        <ArticleComp
                            title='Console By Codesee'
                            tag='#opensource #software #newsletter #publications'
                            link="https://console.substack.com/"
                        />
                        <ArticleComp
                            title='Initiating a NestJs app with PostgreSQL using Docker'
                            tag='#web2 #starter'
                            link='https://dev.to/blankgodd/initiating-a-nestjs-app-with-postgresql-using-docker-4bag'
                        />
                        <ArticleComp
                            title='Working with PostgreSQL and flask_sqlalchemy'
                            tag='#orm #postgresql'
                            link="https://dev.to/blankgodd/working-with-postgresql-and-flasksqlalchemy-3c38"
                        />
                        <ArticleComp
                            title='Building a CMS API with Fauna and FastAPI'
                            tag='#fauna #fastapi #tutorial'
                            link="https://dev.to/blankgodd/building-a-cms-api-with-fauna-and-fastapi-3g36"
                        />
                        <ArticleComp
                            title='Build a Flask Application with Blueprints'
                            tag='#flask #starter #begineer'
                            link="https://dev.to/blankgodd/creating-a-blueprint-based-flask-app-199h"
                        />
                        <ArticleComp
                            title='A simple introduction to GraphQL with ExpressJs and Docker'
                            tag='#graphql #tutorial #begineer'
                            link="https://dev.to/blankgodd/a-simple-introduction-to-graphql-with-expressjs-and-docker-11ff"
                        />
                    </ul>
                </Layout>
            </main>
        </>
    )
}

export default Articles
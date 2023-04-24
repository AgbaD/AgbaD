import { AnimatedText, Layout } from '@/components'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React, { useRef } from 'react'
import { motion, useMotionValue } from 'framer-motion'

import a1 from '../../public/images/articles/a1.jpg';
import db from '../../public/images/articles/db.webp';
import graph from '../../public/images/articles/graphNode.webp';
import nspg from '../../public/images/articles/nspg.webp';
import flasksql from '../../public/images/articles/flasksql.webp';
import blue from '../../public/images/articles/blue.webp';


const FramerImage = motion(Image);

const FeaturedArticle = ({ img, title, tags, summary, link}) => {
    return(
        <li className='col-span-1 w-full p-4 bg-light border border-solid border-dark
        rounded-2xl relative'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl' />
            <Link href={link} target={'_blank'}className='w-full cursor-pointer 
            overflow-hidden rounded-lg inline-block' >
                <FramerImage src={img} alt={title} className='w-full h-auto'
                whileHover={{ scale: 1.05 }} 
                transition={{ duration: 0.2 }}/>
            </Link>
            <Link href={link} target={'_blank'}>
                <h2 className='text-2xl capitalize font-bold my-2 mt-4 hover:underline hover:underline-offset-2'>
                    { title }
                </h2>
            </Link>
            <p className='text-sm mb-2'>{ summary }</p>
            <span className='text-primary font-semibold'>{ tags }</span>
        </li>
    )
}

const MovingImg = ({ img, title, link}) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);
    const imgRef = useRef(null);

    function handleMouse(event) {
        imgRef.current.style.display = "inline-block";
        x.set(event.pageX);
        y.set(-10);
    }

    function handleMouseLeave(event) {
        imgRef.current.style.display = "none";
        x.set(0);
        y.set(0)
    }

    return(
        <Link href={link} target={'_blank'}
        onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
            <h2 className='capitalize text-xl font-semibold hover:underline'>{ title }</h2>
            <FramerImage style={{ x:x, y:y }}
            initial={{ opacity: 0 }} 
            whileInView={{ opacity: 1, transition: { duration: 0.2 }}}
            ref={imgRef} src={img} alt={title} className='z-10 w-96 h-auto hidden absolute rounded-lg'/>
        </Link>
    )
}

const ArticleComp = ({ img, title, tag, link }) => {
    return(
        <motion.li initial={{ y:200 }} whileInView={{ y:0, transition: { duration: 0.5, ease: "easeInOut" } }}
        viewport={{ once: true }}
        className='relative w-full p-4 py-6 my-4 rounded-2xl flex items-center justify-between
        bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4'>
            <MovingImg title={title} img={img} link={link}/>
            <span className='text-primary font-semibold pl-4'>{ tag }</span> 
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
        <main className='w-full mb-16 flex flex-col items-center justify-center overflow-hidden'>
            <Layout className='pt-16'>
                <AnimatedText text="Words Can Change The World." className='mb-16'/>
                <ul className='grid grid-cols-2 gap-16'>
                    <FeaturedArticle
                    title="Exploring Web3, DeFi, NFTs, and DAOs: The Future of Digital Innovation"
                    summary="In this article, we will explore what web3, DeFi, NFTs, and DAOs are, and how they are shaping the future of our digital landscape."
                    tags="#web3 #defi # begineer #blockchain"
                    link="https://dev.to/blankgodd/exploring-web3-defi-nfts-and-daos-the-future-of-digital-innovation-4idc"
                    img={a1}
                    />
                    
                    <FeaturedArticle
                    title="A simple introduction to GraphQL with ExpressJs and Docker"
                    summary="Let us make a handy template for getting started with GraphQL applications. You'll first need to setup a simple Express application using GraphQL..."
                    tags="#graphql #tutorial #begineer"
                    link="https://dev.to/blankgodd/a-simple-introduction-to-graphql-with-expressjs-and-docker-11ff"
                    img={graph}
                    />
                </ul>
                <h2 className='font-bold text-4xl w-full text-center my-16 mt-32'>All Articles</h2>
                <ul>
                    <ArticleComp 
                    title='Initiating a NestJs app with PostgreSQL using Docker'
                    img={nspg}
                    tag='#web2 #starter'
                    link='https://dev.to/blankgodd/initiating-a-nestjs-app-with-postgresql-using-docker-4bag'
                    />
                    <ArticleComp 
                    title='Working with PostgreSQL and flask_sqlalchemy'
                    img={flasksql}
                    tag='#orm #postgresql'
                    link="https://dev.to/blankgodd/working-with-postgresql-and-flasksqlalchemy-3c38"
                    />
                    <ArticleComp 
                    title='Build a Flask Application with Blueprints'
                    img={blue}
                    tag='#flask #starter #begineer'
                    link="https://dev.to/blankgodd/creating-a-blueprint-based-flask-app-199h"
                    />
                    <ArticleComp 
                    title='Connecting to a MySQL database with SQLAlchemy'
                    img={db}
                    tag='#mysql #ORM #sqlalchemy'
                    link="https://dev.to/blankgodd/connecting-to-a-mysql-database-with-sqlalchemy-lmc"
                    />
                </ul>
            </Layout>
        </main>
    </>
  )
}

export default Articles
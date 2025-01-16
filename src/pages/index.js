import { 
  AnimatedText, Layout, Experience,
  TransitionEffect, GithubIcon,
} from '@/components'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/digi-dev.png';
import mainPic from '../../public/images/profile/dami-2.JPG';
import Link from 'next/link';
import { motion } from 'framer-motion'

import lp from '../../public/images/projects/lp.png';
import kinnect from '../../public/images/projects/kinnect.png'
import docutrove from '../../public/images/projects/docutrove.png'
import precision from '../../public/images/projects/precision.png'
import aiderapp from '../../public/images/projects/aiderapp.png'
import yebora from '../../public/images/projects/yebora.png';
import sportstatix from '../../public/images/projects/sportstatix.png';
import codesee from '../../public/images/articles/codesee.png';


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

const OtherProject = ({ type, title, img, summary, link, github }) => {
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
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target={'_blank'} className='text-dark dark:text-light
                    text-lg font-semibold underline md:text-base'>Visit</Link>
                    <Link href={github} target={'_blank'} className='w-7 md:w-6'><GithubIcon /></Link>
                </div>
            </div>
        </article>
    )
}

const FeaturedArticle = ({ img, title, tags, summary, link }) => {
    return (
        <li className='w-full flex items-center justify-between rounded-3xl
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
                <Link href={link} target={'_blank'} className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm
                    '>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <span className='text-primary font-medium text-xl dark:text-primaryDark
                xs:text-base'>{tags}</span>
            </div>
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

export default function Home() {
  return (
    <>
      <Head>
        <title>Damilare Agbabiaka | Software Engineer</title>
        <meta name="description" content="Damilare Agbabiaka Portfolio" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark dark:text-light w-full min-h-screen'>
        <Layout className='pt-0 md:pt-16 sm:pt-8'>
          <div className='flex items-center justify-between w-full lg:flex-col mb-16'>
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
                I've built scalable and reliable systems as a skilled software engineer with growing expertise in blockchain technology.
                Explore my latest projects and articles, showcasing my expertise in software development and technical writing.
              </p>
              <AnimatedText text="DAMILARE AGBABIAKA A." className='!capitalise !text-4xl !text-left
              lg:!text-center sm:!text-3xl' />
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href='https://docs.google.com/document/d/169_u-Ho4m6aCz4vs3u2YbbeCjAyM_TfS6lk_aUk7bdY/edit?usp=sharing'
                target={"_blank"}
                  className='flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold
                hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark
                dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
                md:p-2 md:px-4 md:text-base'
                >Resume ↗</Link>

                <Link href="mailto:damilareagba1@gmail.com"
                  className='ml-4 text-lg font-medium capitalize text-dark underline dark:text-light
                  md:text-base'
                >Lets Work
                </Link>
              </div>
            </div>
          </div>

          <AnimatedText text="To The Universe And Beyond! 💫" className='mb-16 lg:!text-7xl sm:!text-6xl 
          xs:!text-4xl sm:mb-8' />
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>

            <div className='col-span-4 flex flex-col items-start justify-start lg:order-2 lg:col-span-8'>
              <h2 className='my-4 text-lg font-bold uppercase text-dark/95 dark:text-light'>About Me</h2>
              <p className='font-medium '>
                I'm a skilled Software Engineer with a growing expertise in blockchain technology.
                Over the past five years, I've built scalable and reliable systems using JavaScript,
                Python, Typescript, PHP, Java, and Go, and gained experience with various frameworks and technologies,
                including NestJs, ExpressJs, Flask, FastAPI, Gin, Fiber, Laravel, Django, Spring Boot, ReactJs, NextJs, 
                Jira, Docker, as well as working with cloud platforms like AWS, Microsoft Azure, and Digital Ocean.
              </p>
              <p className='font-medium my-6'>
                My recent foray into blockchain technology has given me a strong foundation in the
                fundamentals of blockchain, including consensus algorithms, cryptography, and
                distributed systems, and the ability to develop decentralized applications (DApps)
                and smart contracts using Solidity. With experience as a Technical Writer and Community Manager,
                I'm able to write clear and concise technical documentation and engage with developer communities.
              </p>
              <p className='font-medium my-6'>
                As a quick learner and effective team player with strong communication skills, I thrive in
                collaborative environments, where I can work with stakeholders to identify and solve
                complex problems. I'm passionate about developing innovative solutions that solve real-world
                problems using my skills and knowledge.
              </p>
            </div>

            <div className='col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:border-light dark:bg-dark lg:col-span-8 lg:order-1'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <Image src={mainPic} alt='Damilare Agbabiaka' className='w-full h-auto rounded-2xl'
                priority
                sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw'/>
            </div>

          </div>

          <div className='experience_container pt-32'>
            <Experience />
          </div>

          {/* <div className='skill_container pt-32'>
            <Skills />
          </div> */}

          <AnimatedText text="Bringing Imagination To Life! 🚀" className='mt-16 mb-16 lg:!text-7xl
          sm:!text-6xl sm:mb-8 xs:!text-4xl'/>
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24
          sm:gap-x-0' id='projects'>
              {/* <div className='col-span-12'>
                  <FeaturedProject
                      type="Web2 || Backend || Fiber || Golang"
                      title="Vidor Inc"
                      summary="Access credit and manage credit seamlessly with Vidor."
                      link="https://vidor.io"
                      github="#"
                      img={vidor} />
              </div> */}
              <div className='col-span-6 sm:col-span-12'>
                  <OtherProject
                      type="Web2 || Golang || Typescript"
                      title="Docutrove"
                      link="https://docutrove.co/"
                      github="#"
                      summary="Access easy-to-customise legal documents, quick business registration and the expertise of experienced lawyers"
                      img={docutrove} />
              </div>
              <div className='col-span-6 sm:col-span-12'>
                  <OtherProject
                      type="Web2 || Typescript"
                      title="Kinnect"
                      link="https://play.google.com/store/apps/details?id=com.app.kinnect&hl=en"
                      github="#"
                      summary="Access expert coaching with personalized guidance to help you thrive in love and friendships"
                      img={kinnect} />
              </div>
              <div className='col-span-6 sm:col-span-12'>
                  <OtherProject
                      type="Web2 || Python || Typescript"
                      title="Liberty Pay App"
                      link="https://www.libertypayng.com/"
                      github="#"
                      summary="Access budgeting, requisition, expense tracking, and seamless transactions with massive cashback on LibertyPay"
                      img={lp} />
              </div>
              <div className='col-span-6 sm:col-span-12'>
                  <OtherProject
                      type="Web2 || Typescript"
                      title="Yebora"
                      link="https://www.yebora.com/"
                      github="#"
                      summary="Transparent crowd funding to empower your community and support the causes that matter to you"
                      img={yebora} />
              </div>
              <div className='col-span-12'>
                  <FeaturedProject
                      type="Web2 || Typescript"
                      title="SportStatix"
                      summary="Ultimate sports management platform dedicated to bringing African sports together."
                      link="https://www.sportstatix.com/"
                      github="#"
                      img={sportstatix} />
              </div>
              <div className='col-span-6 sm:col-span-12'>
                  <OtherProject
                      type="Web2 || PHP || Javascript"
                      title="Precision Verify"
                      link="https://www.precision-verify.com/"
                      github="#"
                      summary="Access to identity verification using official records and 3rd-party integrations for seamless authentication."
                      img={precision} />
              </div>
              <div className='col-span-6 sm:col-span-12'>
                  <OtherProject
                      type="Web2 || PHP || Flutter"
                      title="Aider"
                      link="https://aiderapp.com/"
                      github="#"
                      summary="Aider connects you with your community to borrow anything and make money lending what you have. "
                      img={aiderapp} />
              </div>
          </div>

          <AnimatedText text="Written Art, Painted Words. 🎨" className='mt-24 mb-16 lg:!text-7xl
            sm:!text-6xl sm:mb-8 xs:!text-4xl' />
            {/* <ul className='grid grid-cols-2 gap-16 md:grid-cols-1 lg:gap-8 md:gap-y-16'> */}
            <ul className='col-span-12'>
                <FeaturedArticle
                    title="Console By Codesee"
                    summary="CodeSee's Open Source Hub is your 1 stop shop for all things open source. List your project to find contributors, onboard them quickly and join our 12,000 person community filled with resources, events and more."
                    tags='#opensource #software #newsletter #publications'
                    link="https://console.substack.com/"
                    img={codesee}
                />
            </ul>
            <ul className='mt-24'>
                <ArticleComp
                    title='Cogito Protocol: Revolutionizing Stablecoins with Sustainable Tracercoins and AI-Backed Stability'
                    tag="#tracercoins #stablecoins #defi #ai"
                    link="https://medium.com/@singularitynetambassadors/cogito-protocol-revolutionizing-stablecoins-with-sustainable-tracercoins-and-ai-backed-stability-e3c0d03e7a5c"
                />
                <ArticleComp
                    title='Exploring Web3, DeFi, NFTs, and DAOs: The Future of Digital Innovation'
                    tag="#web3 #defi # begineer #blockchain"
                    link="https://dev.to/blankgodd/exploring-web3-defi-nfts-and-daos-the-future-of-digital-innovation-4idc"
                />
                <ArticleComp
                    title='Connecting to a MySQL database with SQLAlchemy'
                    tag='#mysql #ORM #sqlalchemy'
                    link="https://dev.to/blankgodd/connecting-to-a-mysql-database-with-sqlalchemy-lmc"
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

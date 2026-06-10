import {
  AnimatedText, Layout, Experience,
  TransitionEffect, GithubIcon, Brands,
  Services, Skills, Stats, Contact,
} from '@/components'
import Head from 'next/head'
import Image from 'next/image'
import profilePic from '../../public/images/profile/digi-dev.png';
import mainPic from '../../public/images/profile/dami.jpg';
import Link from 'next/link';
import { motion } from 'framer-motion'

import lp from '../../public/images/projects/lp.png';
import kinnect from '../../public/images/projects/kinnect.png'
import precision from '../../public/images/projects/precision.png'
import aiderapp from '../../public/images/projects/aiderapp.png'
import eptw from '../../public/images/projects/eptw.png'
import directstay from '../../public/images/projects/directstay.png'
import tour from '../../public/images/projects/tour.png'
import ankurbot from '../../public/images/projects/ankurbot.png';
import erp from '../../public/images/projects/erp.png';
import learnvault from '../../public/images/projects/learnvault.png';
import switchop from '../../public/images/projects/switchop.png';
import codesee from '../../public/images/articles/codesee.png';


const FramerImage = motion.create(Image);

const TechBadge = ({ label }) => (
    <span className='px-2.5 py-0.5 text-xs font-semibold rounded-md
    bg-primary/10 text-primary dark:bg-primaryDark/10 dark:text-primaryDark
    border border-primary/20 dark:border-primaryDark/20'>
        {label}
    </span>
)

const FeaturedProject = ({ tags, title, summary, img, link, github }) => {
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
                <div className='flex flex-wrap gap-1.5 mb-2'>
                    {tags.map(t => <TechBadge key={t} label={t} />)}
                </div>
                <Link href={link} target={'_blank'} className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center gap-4'>
                    {github !== '#' && (
                        <Link href={github} target={'_blank'} className='w-10'><GithubIcon /></Link>
                    )}
                    <Link href={link} target={'_blank'} className='rounded-lg bg-dark text-light p-2
                    px-6 text-lg font-semibold hover:bg-light hover:text-dark hover:border hover:border-dark
                    dark:bg-light dark:text-dark hover:dark:text-light hover:dark:bg-dark hover:dark:border-light
                    sm:px-4 sm:text-base'>
                        Visit Project
                    </Link>
                </div>
            </div>
        </article>
    )
}

const OtherProject = ({ tags, title, img, summary, link, github }) => {
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
                <div className='flex flex-wrap gap-1.5 mb-1'>
                    {tags.map(t => <TechBadge key={t} label={t} />)}
                </div>
                <Link href={link} target={'_blank'} className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='w-full mt-2 flex items-center justify-between'>
                    <Link href={link} target={'_blank'} className='text-dark dark:text-light
                    text-lg font-semibold underline md:text-base'>Visit</Link>
                    {github !== '#' && (
                        <Link href={github} target={'_blank'} className='w-7 md:w-6'><GithubIcon /></Link>
                    )}
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

const ArticleComp = ({ title, tag, link, platform = 'dev.to', readTime = '5 min read' }) => {
  return (
      <motion.li initial={{ y: 200 }} whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }} className='relative w-full p-4 py-6 my-4 rounded-2xl flex items-center
      bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4
      dark:bg-dark dark:text-light dark:border-light sm:flex-col justify-between gap-4'>
          <Link href={link} target={'_blank'} className='flex-1 min-w-0'>
              <h2 className='capitalize text-xl font-semibold hover:underline sm:text-lg'>{title}</h2>
          </Link>
          <div className='flex items-center gap-3 flex-shrink-0 sm:self-start sm:flex-wrap'>
              <span className='text-xs font-semibold px-2 py-0.5 rounded border border-dark/20
              dark:border-light/20 text-dark/60 dark:text-light/60 whitespace-nowrap'>{platform}</span>
              <span className='text-xs text-dark/40 dark:text-light/40 whitespace-nowrap'>{readTime}</span>
              <span className='text-primary font-semibold dark:text-primaryDark text-sm'>{tag}</span>
          </div>
      </motion.li>
  )
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Damilare Agbabiaka | Senior Backend Engineer &amp; Solutions Architect</title>
        <meta name="description" content="Senior Backend Engineer and Solutions Architect with 5+ years building scalable cloud-native systems across fintech, healthcare, SaaS, and Web3." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Damilare Agbabiaka | Senior Backend Engineer & Solutions Architect" />
        <meta property="og:description" content="Senior Backend Engineer and Solutions Architect with 5+ years building scalable cloud-native systems across fintech, healthcare, SaaS, and Web3." />
        <meta property="og:image" content="/images/profile/dami.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@agba_biaka" />
        <meta name="twitter:title" content="Damilare Agbabiaka | Senior Backend Engineer & Solutions Architect" />
        <meta name="twitter:description" content="Senior Backend Engineer and Solutions Architect with 5+ years building scalable cloud-native systems across fintech, healthcare, SaaS, and Web3." />
        <meta name="twitter:image" content="/images/profile/dami.jpg" />
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
                Senior Backend Engineer and Solutions Architect with 5+ years designing and operating highly scalable,
                cloud-native systems across fintech, healthcare, SaaS, and Web3. Deep expertise in Node.js/TypeScript
                and Python, multi-cloud infrastructure (AWS, GCP, Azure), DevOps, and AI/LLM integration.
                Explore my latest projects and articles below.
              </p>
              <AnimatedText text="DAMILARE AGBABIAKA A." className='!capitalise !text-4xl !text-left
              lg:!text-center sm:!text-3xl' />
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href='https://drive.google.com/file/d/1W6FuC00RRKcx_doZkLfbkNkS5jgTGUoh/view?usp=sharing'
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
          <div className='grid w-full grid-cols-8 gap-16 sm:gap-8' id='about'>

            <div className='col-span-4 mt-8 flex flex-col items-start justify-start lg:order-2 lg:col-span-8'>
              <h2 className='my-4 text-lg font-bold uppercase text-dark/95 dark:text-light'>About Me</h2>
              <p className='font-medium'>
                I&apos;m a Senior Backend Engineer and Solutions Architect with 5+ years of experience
                designing, building, and operating highly scalable, secure, cloud-native systems. I&apos;ve
                worked across fintech, healthcare, legal tech, SaaS, and Web3 — delivering production-grade
                REST and GraphQL APIs, complex third-party integrations (payments, KYC, customer support),
                and multi-cloud infrastructure on AWS, GCP, and Azure.
              </p>
              <p className='font-medium my-6'>
                My core stack is Node.js/TypeScript and Python (FastAPI, Django), with strong DevOps
                experience across Docker, Kubernetes, Terraform, and GitHub Actions CI/CD. I&apos;ve integrated
                LLM/AI APIs for intelligent automation products and have deep roots in Web3 — having
                architected a soulbound-token governance platform for 3,000+ DAO members at SingularityNET.
                I&apos;m also a published technical writer with 10,000+ developer readers.
              </p>
              <p className='font-medium'>
                I&apos;ve recruited and led cross-functional engineering teams, established coding standards and
                PR review culture, and maintained high delivery velocity across complex, concurrent client
                products. I care deeply about security-first design, observability, and building systems
                that are as maintainable as they are performant.
              </p>
            </div>

            <div className='col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:border-light dark:bg-dark lg:col-span-8 lg:order-1'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
              <div className='relative w-full aspect-square rounded-2xl overflow-hidden'>
                <Image src={mainPic} alt='Damilare Agbabiaka' priority fill
                  className='object-cover'
                  style={{ objectPosition: '50% 20%' }}
                  sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw'
                />
              </div>
            </div>

          </div>

          <div className='pt-32'>
            <Services />
          </div>

          <div className='pt-32'>
            <Skills />
          </div>

          <div className='pt-32'>
            <Stats />
          </div>

          <div className='pt-32'>
            <Brands />
          </div>

          <div className='pt-32'>
            <Experience />
          </div>

          <AnimatedText text="Bringing Imagination To Life! 🚀" className='mt-16 mb-16 lg:!text-7xl
          sm:!text-6xl sm:mb-8 xs:!text-4xl'/>
          <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24
          sm:gap-x-0' id='projects'>
              <div className='col-span-12'>
                  <FeaturedProject
                      tags={["NestJS", "React", "LMS"]}
                      title="LearnVault"
                      summary="Gives organizations one place to train staff, measure learning outcomes, and scale development as teams grow."
                      link="https://mylearnvault.com"
                      github="#"
                      img={learnvault} />
              </div>
              <div className='col-span-6 sm:col-span-12'>
                  <OtherProject
                      tags={["Python", "FastAPI", "AI"]}
                      title="AnkurBot"
                      link="https://ankurbot.com"
                      github="#"
                      summary="Helps teams automate support, answer customer questions instantly, capture leads, and reduce repetitive workload using your own business content."
                      img={ankurbot} />
              </div>
              <div className='col-span-6 sm:col-span-12'>
                  <OtherProject
                      tags={["NestJS", "React", "ERP"]}
                      title="ERP"
                      link="https://dev-erp.ankursolutions.com/"
                      github="#"
                      summary="Modular ERP platform built to centralize workforce management, finance, and operations within a secure, scalable architecture."
                      img={erp} />
              </div>
              <div className='col-span-12'>
                  <FeaturedProject
                      tags={[".NET", "React", "Infrastructure"]}
                      title="SwitchOp"
                      summary="Sits between your platform and every third-party provider, detecting failures and rerouting traffic before your users ever notice. One layer of intelligence. Zero downtime to defend."
                      link="https://switchop-dev-landing.ankursolutions.com/"
                      github="#"
                      img={switchop} />
              </div>
              <div className='col-span-6 sm:col-span-12'>
                  <OtherProject
                      tags={["TypeScript", "Node.js", "Mobile"]}
                      title="Kinnect"
                      link="https://play.google.com/store/apps/details?id=com.app.kinnect&hl=en"
                      github="#"
                      summary="Expert relationship coaching with personalised guidance to help you thrive in love and friendships."
                      img={kinnect} />
              </div>
              <div className='col-span-6 sm:col-span-12'>
                  <OtherProject
                      tags={["Python", "TypeScript", "Fintech"]}
                      title="Liberty Pay App"
                      link="https://www.libertypayng.com/"
                      github="#"
                      summary="Budgeting, requisition, expense tracking, and seamless transactions with cashback — built on a scalable Python/TypeScript backend."
                      img={lp} />
              </div>
              <div className='col-span-12'>
                  <FeaturedProject
                      tags={["NestJS", "React", "Enterprise"]}
                      title="EPTW"
                      summary="Electronic Permit to Work System — a digital platform for managing, approving, and auditing work permits across industrial and enterprise operations."
                      link="https://eptw.oandoplc.com/login"
                      github="#"
                      img={eptw} />
              </div>
              <div className='col-span-6 sm:col-span-12'>
                  <OtherProject
                      tags={["PHP", "JavaScript", "Identity"]}
                      title="Precision Verify"
                      link="https://www.precision-verify.com/"
                      github="#"
                      summary="Identity verification using official records and third-party integrations for seamless, secure KYC authentication."
                      img={precision} />
              </div>
              <div className='col-span-6 sm:col-span-12'>
                  <OtherProject
                      tags={["TypeScript", "NestJS", "Travel"]}
                      title="DirectStay"
                      link="https://directstaynow.com/"
                      github="#"
                      summary="Discover unique stays and unforgettable accommodations worldwide with DirectStay."
                      img={directstay} />
              </div>
              <div className='col-span-6 sm:col-span-12'>
                  <OtherProject
                      tags={["TypeScript", "NestJS", "Travel"]}
                      title="Tour Africa"
                      link="https://dev.thetourafrica.com/"
                      github="#"
                      summary="Discovering doesn't have to be a chore — explore curated African travel experiences in one place."
                      img={tour} />
              </div>
              <div className='col-span-6 sm:col-span-12'>
                  <OtherProject
                      tags={["PHP", "Flutter", "Marketplace"]}
                      title="Aider"
                      link="https://aiderapp.com/"
                      github="#"
                      summary="Community-powered borrowing marketplace — connect with neighbours to borrow anything or earn money lending what you own."
                      img={aiderapp} />
              </div>
          </div>

          <div id='articles'>
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
                    tag="#stablecoins #defi #ai"
                    link="https://medium.com/@singularitynetambassadors/cogito-protocol-revolutionizing-stablecoins-with-sustainable-tracercoins-and-ai-backed-stability-e3c0d03e7a5c"
                    platform="Medium"
                    readTime="8 min read"
                />
                <ArticleComp
                    title='Exploring Web3, DeFi, NFTs, and DAOs: The Future of Digital Innovation'
                    tag="#web3 #blockchain #defi"
                    link="https://dev.to/blankgodd/exploring-web3-defi-nfts-and-daos-the-future-of-digital-innovation-4idc"
                    platform="dev.to"
                    readTime="10 min read"
                />
                <ArticleComp
                    title='Connecting to a MySQL database with SQLAlchemy'
                    tag='#python #orm #sqlalchemy'
                    link="https://dev.to/blankgodd/connecting-to-a-mysql-database-with-sqlalchemy-lmc"
                    platform="dev.to"
                    readTime="5 min read"
                />
                <ArticleComp
                    title='Initiating a NestJs app with PostgreSQL using Docker'
                    tag='#nestjs #postgresql #docker'
                    link='https://dev.to/blankgodd/initiating-a-nestjs-app-with-postgresql-using-docker-4bag'
                    platform="dev.to"
                    readTime="6 min read"
                />
                <ArticleComp
                    title='Working with PostgreSQL and flask_sqlalchemy'
                    tag='#flask #orm #postgresql'
                    link="https://dev.to/blankgodd/working-with-postgresql-and-flasksqlalchemy-3c38"
                    platform="dev.to"
                    readTime="5 min read"
                />
                <ArticleComp
                    title='Building a CMS API with Fauna and FastAPI'
                    tag='#fastapi #fauna #tutorial'
                    link="https://dev.to/blankgodd/building-a-cms-api-with-fauna-and-fastapi-3g36"
                    platform="dev.to"
                    readTime="7 min read"
                />
                <ArticleComp
                    title='Build a Flask Application with Blueprints'
                    tag='#flask #python #tutorial'
                    link="https://dev.to/blankgodd/creating-a-blueprint-based-flask-app-199h"
                    platform="dev.to"
                    readTime="4 min read"
                />
                <ArticleComp
                    title='A simple introduction to GraphQL with ExpressJs and Docker'
                    tag='#graphql #expressjs #docker'
                    link="https://dev.to/blankgodd/a-simple-introduction-to-graphql-with-expressjs-and-docker-11ff"
                    platform="dev.to"
                    readTime="6 min read"
                />
            </ul>
          </div>

          <Contact />
        </Layout>
      </main>
    </>
  )
}

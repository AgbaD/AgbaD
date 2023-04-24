import { AnimatedText, Layout } from '@/components'
import Head from 'next/head'
import React from 'react'

import profilePic from '../../public/images/profile/dami-2.jpg'
import Image from 'next/image'

const About = () => {
  return (
    <>
      <Head>
        <title>Damilare Agbabiaka | About Page</title>
        <meta name="description" content="Damilare Agbabiaka Portfolio - About Me" />
      </Head>
      <main className='flex w-full items-center flex-col justify-center dark:text-light'>
        <Layout className='pt-16'>
          <AnimatedText text="To The Universe And Beyond! 💫" className='mb-16' />
          <div className='grid w-full grid-cols-8 gap-16'>
            
            <div className='col-span-4 flex flex-col items-start justify-start'>
              <h2 className='my-4 text-lg font-bold uppercase text-dark/95 dark:text-light'>About Me</h2>
              <p className='font-medium '>
                I'm a skilled Software Engineer with a growing expertise in blockchain technology. 
                Over the past three years, I've built scalable and reliable systems using JavaScript, 
                Python, Typescript, and Go, and gained experience with various frameworks and technologies, 
                including NestJs, ExpressJs, Flask, Gin, Django, Jira, Docker, as well as working with 
                cloud platforms like AWS and Digital Ocean.
              </p>
              <p className='font-medium my-6'>
                My recent foray into blockchain technology has given me a strong foundation in the 
                fundamentals of blockchain, including consensus algorithms, cryptography, and 
                distributed systems, and the ability to develop decentralized applications (DApps) 
                and smart contracts using Solidity. With experience as a Technical Writer and Community Manager, 
                I'm able to write clear and concise technical documentation and engage with developer communities.
              </p>
              <p className='font-medium '>
                As a quick learner and effective team player with strong communication skills, I thrive in 
                collaborative environments, where I can work with stakeholders to identify and solve 
                complex problems. I'm passionate about developing innovative solutions that solve real-world 
                problems using my skills and knowledge.
              </p>
            </div>

            <div className='col-span-4 relative h-max rounded-2xl border-2 border-solid border-dark
            bg-light p-8 dark:border-light dark:bg-dark'>
              <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light'/>
              <Image src={profilePic} alt='blankgodd' className='w-full h-auto rounded-2xl'
              priority 
              sizes='(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw'/>
            </div>

          </div>
        </Layout>
      </main>
    </>
  )
}

export default About
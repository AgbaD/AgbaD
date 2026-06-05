import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { GithubIcon, LinkedInIcon, TwitterIcon } from './Icons'

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='flex flex-col items-center text-center pt-24 pb-8'
      id='contact'
    >
      <h3 className='uppercase tracking-[10px] text-primary dark:text-primaryDark text-2xl mb-4
      md:tracking-[5px] md:text-xl'>
        Get In Touch
      </h3>
      <h2 className='text-5xl font-bold text-dark dark:text-light mb-6 xl:text-4xl sm:text-3xl'>
        Let&apos;s Build Something Great.
      </h2>
      <p className='text-dark/70 dark:text-light/70 font-medium max-w-xl mb-10 md:text-sm'>
        Whether you&apos;re looking for a senior engineer to own your backend architecture, a solutions architect
        for a complex product, or a technical leader to help scale your team — I&apos;d love to hear from you.
      </p>
      <div className='flex items-center gap-6 flex-wrap justify-center mb-10'>
        <Link href='mailto:damilareagba1@gmail.com'
          className='flex items-center bg-dark text-light px-8 py-3 rounded-lg text-lg font-semibold
          hover:bg-light hover:text-dark border-2 border-solid border-dark
          dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light
          transition-colors duration-200'
        >
          Say Hello ↗
        </Link>
      </div>
      <div className='flex items-center gap-8 justify-center flex-wrap'>
        <motion.a href='https://www.linkedin.com/in/damilare-agbabiaka/' target='_blank' rel='noreferrer'
          whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-7'>
          <LinkedInIcon />
        </motion.a>
        <motion.a href='https://github.com/AgbaD' target='_blank' rel='noreferrer'
          whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-7'>
          <GithubIcon />
        </motion.a>
        <motion.a href='https://twitter.com/agba_biaka' target='_blank' rel='noreferrer'
          whileHover={{ y: -2 }} whileTap={{ scale: 0.9 }} className='w-7'>
          <TwitterIcon />
        </motion.a>
      </div>
    </motion.div>
  )
}

export default Contact

import React from 'react'
import { motion } from 'framer-motion';
import { CircularText } from './Icons';
import Link from 'next/link';

const MotionLink = motion(Link)

const quote = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    }
  }
}

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    }
  }
}

export const Layout = ({ children, className=""}) => {
  return (
    <div className={`w-full h-full inline-block z-0 bg-light p-32 ${className}`}>
        {children}
    </div>
  )
}

export const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <MotionLink className='w-16 h-16 flex items-center justify-center text-light bg-dark 
        rounded-full text-2xl font-bold font-italic' href="/"
        whileHover={{
            scale: 1.3,
            backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
            transition: { duration: 1, repeat: Infinity }
        }}
        >AG
        </MotionLink>
    </div>
  )
}

export const AnimatedText = ({ text, className=""}) => {
  return(
    <div className='w-full mx-auto py-2 flex items-center justify-center text-center
    overflow-hidden
    '>
      <motion.h1 className={`inline-block w-full text-dark font-bold capitalize text-8xl ${className}`}
        variants={quote} initial="initial" animate="animate"
      >
        {
          text.split(" ").map((word, ind) =>
            <motion.span key={word+'-'+ind}
            className='inline-block' variants={singleWord}
            >
              {word}&nbsp;
            </motion.span>
          )
        }
      </motion.h1>
    </div>
  )
}

export const HireMe = () => {
  return(
    <div className='fixed left-4 bottom-4 flex justify-center items-center overflow-hidden'>
      <div className='w-48 h-auto flex items-center justify-center relative'>
        <CircularText className={'fill-dark animate-spin-slow'}/>
        <Link href='mailto:damilareagba1@gmail.com' className='flex items-center justify-center
        absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md
        border border-solid border-dark w-20 h-20 rounded-full font-semibold
        hover:bg-light hover:text-dark'
        >
          Hire Me
        </Link>
      </div>
    </div>
  )
}

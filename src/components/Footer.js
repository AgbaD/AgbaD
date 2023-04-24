import React from 'react'
import { Layout } from './Utils'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg
    dark:border-light dark:text-light sm:text-base'>
      <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
        <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
        <div className='flex items-center lg:pt-2'>
          Built With <span className='text-primary dark:text-primaryDark text-2xl px-1'>&hearts;</span>
          by&nbsp;<Link href='/'
            className='underline underline-offset-2' target={"_blank"}
          >Me (BlankGodd)</Link>
        </div>
      </Layout>
    </footer>
  )
}

export default Footer
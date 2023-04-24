import React from 'react'
import { Layout } from './Utils'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark font-medium text-lg'>
        <Layout className='py-8 flex items-center justify-between '>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved</span>
            <div className='flex items-center'>
                Built With <span className='text-primary text-2xl px-1'>&hearts;</span>
                by&nbsp;<Link href='/'
                className='underline underline-offset-2' target={"_blank"}
                >BlankGodd</Link>
            </div>
        </Layout>
    </footer>
  )
}

export default Footer
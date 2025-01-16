import { motion } from 'framer-motion'
import Image from 'next/image'
import React from 'react'
import dev from '../../public/images/profile/digi-dev.png';

const FramerImage = motion(Image);

const ExperienceCard = ({ title, company, startEnd, url }) => {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
    w-[700px] md:w-[500px] sm:w-[300px] bg-[#c3bebe] dark:bg-[#303030] p-10 opacity-100
    dark:opacity-70 hover:dark:opacity-100 cursor-pointer transition-opacity duration-200 
    overflow-hidden'>
      <FramerImage src={dev} alt={'dev'}
      className='h-[200px] w-[200px] lg:h-32 lg:w-32 rounded-full object-cover object-center'
      initial={{
        y: -100,
        opacity: 0
      }}
      transition={{ duration: 1.2 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      />

      <div className='px-10 md:px-0'>
        <h4 className='text-4xl md:text-2xl'>{title}</h4>
        <a href={url} target="_blank" className='font-bold text-primary dark:text-primaryDark text-2xl 
        hover:text-[23px] md:text-xl mt-1'>{company}</a>
        <p className='uppercase py-5 text-300'>{startEnd}</p>
      </div>
    </article>
  )
}

const Experience = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ opacity: 1.5 }}
    className='flex overflow-hidden flex-col text-left mx-auto items-center justify-evenly
    max-w-full px-10 sm:px-2'> 
      <h3 className='top-44 uppercase tracking-[20px] text-dark dark:text-light text-700 
      text-3xl md:text-2xl md:tracking-[10px] md:top-24'
      >Experience ˃˃˃˃˃</h3>

      <div className='mt-20 text-dark dark:text-light w-full flex space-x-5 overflow-x-scroll
      p-10'>
        <ExperienceCard title={'Software Engineer & Solutions Architect'} company={'Ankur Global Solutions'} 
        url='https://ankursolutions.com/' startEnd={'2023 - Present'}/>

        <ExperienceCard title={'Fullstack Engineer & Team Lead'} company={'Papayr Limited'} 
        url='https://find-and-update.company-information.service.gov.uk/company/14012451' startEnd={'2023 - 2024'}/>

        <ExperienceCard title={'Software Engineer & Technical Writer (Contract)'} company={'CodeSee - OSH'} 
        url='https://www.codesee.io/' startEnd={'2022 - 2023'}/>

        <ExperienceCard title={'Backend Engineer'} company={'Yebox Technologies'} 
        url='https://yebox.io/' startEnd={'2022 - 2023'}/>

        <ExperienceCard title={'Backend Engineer (Contract)'} company={'Liberty Tech'} 
        url='https://www.libertypayng.com/' startEnd={'2022 - 2023'}/>

        <ExperienceCard title={'Backend Engineer & Team Lead'} company={'FirstFounders Inc.'} 
        url='https://firstfounders.cc/' startEnd={'2021 - 2023'}/>

        <ExperienceCard title={'Fullstack Engineer'} company={'PaySync Technologies'} 
        url='https://play.google.com/store/apps/details?id=com.ola.paysync&hl=en&gl=US' startEnd={'2020 - 2022'}/>

        <ExperienceCard title={'Fullstack Engineer'} company={'TheMiddleMaan Enterprise'} 
        url='http://tmm.surge.sh/' startEnd={'2020 - 2021'}/>

        <ExperienceCard title={'Data Science Intern'} company={'Hash Analytics'} 
        url='https://www.crunchbase.com/organization/hash-analytic' startEnd={'2019 - 2020'}/>
      </div>
    </motion.div>
  )
}

export default Experience
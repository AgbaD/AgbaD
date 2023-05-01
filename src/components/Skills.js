import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import aws from '../../public/images/skills/aws.svg';
import golang from '../../public/images/skills/golang.svg';
import nestjs from '../../public/images/skills/nestjs.svg';
import postgresql from '../../public/images/skills/postgresql.svg';
import python from '../../public/images/skills/python.svg';
import react from '../../public/images/skills/react.svg';
import solidity from '../../public/images/skills/solidity.svg';
import typescript from '../../public/images/skills/typescript.svg';
import docker from '../../public/images/skills/docker.svg';
import mongodb from '../../public/images/skills/mongodb.svg';
import thirdweb from '../../public/images/skills/thirdweb.png';
import notion from '../../public/images/skills/notion.svg';



const FramerImage = motion(Image);

const SkillCard = ({
    level, img
}) => {
    return (
        <div className='group flex cursor-pointer'>
            <FramerImage 
            initial={{
                x: 200,
                opacity: 0
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={img}
            className='rounded-full b-gray-500 w-32 h-32 lg:h-28 lg:w-28 sm:h-24 sm:w-24 objet-cover
            filter group-hover:grayscale transition duration-300 ease-in-out'/>
            <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300
            ease-in-out group-hover:bg-white w-32 h-32 lg:h-28 lg:w-28 sm:h-24 sm:w-24 
            rounded-full z-0'>
                <div className='flex items-center justify-center h-full'>
                    <p className='text-3xl font-bold text-black opacity-100'>{level}</p>
                </div>
            </div>
        </div>
    )
}

const Skills = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex flex-col text-left md:text-center max-w-[2000px] px-10 ld:px-0
    justify-center space-y-0 mx-auto items-center'> 
      <h3 className='top-44 uppercase tracking-[20px] text-dark dark:text-light text-700 
      text-3xl md:text-2xl md:tracking-[10px] md:top-24'
      >Skills
      </h3>
      <h3 className='py-20 md:top-36 uppercase tracking-[3px] text-sm text-dark dark:text-light
      text-700'>Hover Skill for Proficiency</h3>
      <div className='grid grid-cols-4 gap-5'>
        <SkillCard img={aws} level={"70%"}/>
        <SkillCard img={golang} level={"73%"}/>
        <SkillCard img={nestjs} level={"77%"}/>
        <SkillCard img={postgresql} level={"80%"}/>
        <SkillCard img={python} level={"80%"}/>
        <SkillCard img={react} level={"80%"}/>
        <SkillCard img={solidity} level={"70%"}/>
        <SkillCard img={typescript} level={"73%"}/>
        <SkillCard img={docker} level={"80%"}/>
        <SkillCard img={thirdweb} level={"80%"}/>
        <SkillCard img={mongodb} level={"83%"}/>
        <SkillCard img={notion} level={"90%"}/>
      </div>

    </motion.div>
  )
}

export default Skills
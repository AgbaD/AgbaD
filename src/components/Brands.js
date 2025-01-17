import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

import docutrove from '../../public/images/brands/docutrove.svg';
import kinnect from '../../public/images/brands/kinnect.svg';
import precision from '../../public/images/brands/precision.svg';
import vidor from '../../public/images/brands/vidor.svg';
import zira from '../../public/images/brands/zira.svg';

const FramerImage = motion(Image);

const BrandCard = ({
    img
}) => {
    return (
        <div className='group flex cursor-pointer'>
            <FramerImage 
            initial={{
                opacity: 0
            }}
            animate={{
              opacity: 1,
            }}
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1 }}
            src={img}
            className='w-32 h-32 lg:h-28 lg:w-28 sm:h-24 sm:w-24 objet-cover
            filter grayscale brightness-0 dark:brightness-100 transition duration-300 ease-in-out'/>
        </div>
    )
}

const Brands = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 1.5 }}
    className='flex flex-col text-left md:text-center max-w-[2000px] px-10 ld:px-0
    justify-center space-y-0 mx-auto items-center'> 
      <h3 className='top-44 uppercase tracking-[10px] text-primary dark:text-primaryDark text-700 
      text-2xl md:text-2xl md:tracking-[10px] md:top-24 mb-8'
      >Brands I've Worked With
      </h3>
      <div className='grid grid-cols-5 gap-5 '>
        {/* <BrandCard img={aws} level={"70%"}/>
        <BrandCard img={golang} level={"73%"}/> */}
        <BrandCard img={docutrove} />
        <BrandCard img={precision} />
        <BrandCard img={kinnect} />
        <BrandCard img={vidor} />
        <BrandCard img={zira} />
      </div>

    </motion.div>
  )
}

export default Brands
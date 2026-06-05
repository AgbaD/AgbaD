import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

const stats = [
  { value: 5, suffix: '+', label: 'Years of Experience' },
  { value: 70, suffix: '%', label: 'Deployment Time Reduction' },
  { value: 3, suffix: 'x', label: 'Request Throughput Increase' },
  { value: 99.9, suffix: '%', label: 'Uptime Achieved' },
  { value: 45, suffix: '%', label: 'API Response Improvement' },
  { value: 10, suffix: 'K+', label: 'Developer Readers' },
  { value: 6, suffix: '+', label: 'Engineers Led' },
  { value: 10, suffix: '+', label: 'Published Articles' },
]

const Counter = ({ value, suffix }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)
  const isDecimal = value % 1 !== 0

  useEffect(() => {
    if (!isInView) return
    const duration = 1800
    const steps = 60
    const increment = value / steps
    let current = 0
    const interval = setInterval(() => {
      current += increment
      if (current >= value) {
        setCount(value)
        clearInterval(interval)
      } else {
        setCount(isDecimal ? parseFloat(current.toFixed(1)) : Math.floor(current))
      }
    }, duration / steps)
    return () => clearInterval(interval)
  }, [isInView, value, isDecimal])

  const display = isDecimal ? count.toFixed(1) : Math.floor(count)

  return (
    <span ref={ref} className='text-5xl font-bold text-dark dark:text-light xl:text-4xl md:text-3xl'>
      {display}{suffix}
    </span>
  )
}

const Stats = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='flex flex-col items-center'
      id='impact'
    >
      <h3 className='uppercase tracking-[10px] text-primary dark:text-primaryDark text-2xl mb-12
      md:tracking-[5px] md:text-xl text-center'>
        Impact &amp; Numbers
      </h3>
      <div className='grid grid-cols-4 gap-8 w-full md:grid-cols-2 xs:grid-cols-1'>
        {stats.map(({ value, suffix, label }) => (
          <motion.div
            key={label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='flex flex-col items-center text-center p-6 rounded-2xl border border-solid
            border-dark/20 dark:border-light/20 bg-light dark:bg-dark relative'
          >
            <div className='absolute top-0 -right-2 -z-10 w-[104%] h-[106%] rounded-[1.5rem]
            bg-dark dark:bg-light' />
            <Counter value={value} suffix={suffix} />
            <p className='mt-3 text-sm text-dark/60 dark:text-light/60 font-medium leading-snug'>{label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  )
}

export default Stats

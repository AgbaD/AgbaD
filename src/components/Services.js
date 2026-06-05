import React from 'react'
import { motion } from 'framer-motion'

const services = [
  {
    tag: '01',
    title: 'Backend Engineering',
    description: 'Production-grade REST and GraphQL APIs in Node.js/TypeScript and Python. Third-party integrations — payments, KYC, customer support — with robust error handling, idempotency, and full OpenAPI documentation.',
  },
  {
    tag: '02',
    title: 'Solutions Architecture',
    description: 'End-to-end system design and technical strategy across fintech, healthcare, legal tech, and SaaS. Translating complex business requirements into scalable, maintainable, secure backend architectures.',
  },
  {
    tag: '03',
    title: 'DevOps & Cloud Infrastructure',
    description: 'Multi-cloud infrastructure on AWS, GCP, and Azure using Terraform IaC. CI/CD pipelines with Docker and Kubernetes, zero-downtime blue-green deployments, and Grafana/Prometheus observability stacks.',
  },
  {
    tag: '04',
    title: 'AI & LLM Integration',
    description: 'Integrating OpenAI and LLM APIs into production products. Custom prompt engineering pipelines, multi-tenant LLM systems, and intelligent automation workflows across web and social channels.',
  },
  {
    tag: '05',
    title: 'Web3 & Blockchain',
    description: 'Smart contract development with Solidity and Hardhat on EVM chains, and Anchor for Solana. DeFi protocols, soulbound token identity systems (ERC-5192), and DAO governance platforms.',
  },
  {
    tag: '06',
    title: 'Engineering Leadership',
    description: 'Recruiting, onboarding, and leading cross-functional teams of 5–6+ engineers. Establishing TypeScript/Python coding standards, PR review culture, documentation practices, and sprint-based delivery.',
  },
]

const ServiceCard = ({ tag, title, description }) => (
  <motion.article
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
    className='w-full flex flex-col rounded-2xl border border-solid border-dark bg-light p-8 relative
    dark:bg-dark dark:border-light'
  >
    <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[1.5rem] bg-dark
    dark:bg-light rounded-br-3xl' />
    <span className='text-primary dark:text-primaryDark font-bold text-sm tracking-widest mb-4'>{tag}</span>
    <h4 className='text-xl font-bold mb-3 text-dark dark:text-light'>{title}</h4>
    <p className='text-sm text-dark/70 dark:text-light/70 font-medium leading-relaxed'>{description}</p>
  </motion.article>
)

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='flex flex-col items-center'
      id='services'
    >
      <h3 className='uppercase tracking-[10px] text-primary dark:text-primaryDark text-2xl mb-12
      md:tracking-[5px] md:text-xl text-center'>
        What I Do
      </h3>
      <div className='grid grid-cols-3 gap-x-8 gap-y-12 w-full lg:grid-cols-2 md:grid-cols-1'>
        {services.map(service => (
          <ServiceCard key={service.tag} {...service} />
        ))}
      </div>
    </motion.div>
  )
}

export default Services

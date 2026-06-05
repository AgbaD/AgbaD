import { motion } from 'framer-motion'
import React from 'react'

const experiences = [
  {
    title: 'Senior Backend Engineer & Solutions Architect',
    company: 'Ankur Global Solutions',
    url: 'https://ankursolutions.com/',
    startEnd: '2023 – Present',
    bullets: [
      'Own end-to-end solutions architecture for concurrent client products across fintech, healthcare, legal tech, and SaaS.',
      'Deployed multi-tenant AI agent platform integrating OpenAI/LLM APIs with custom prompt engineering pipelines on Node.js/TypeScript and FastAPI.',
      'Engineered production-grade escrow payment gateway (Python/FastAPI + Golang engine) with fund holds, conditional releases, and dispute resolution.',
      'Built multi-cloud AWS + Cloudflare infrastructure achieving 99.9% uptime and 1,000+ concurrent users; reduced deployment time by 70% via Docker/Kubernetes CI/CD.',
      'Recruited and led a cross-functional team of 6+ engineers — established TypeScript/Python coding standards, PR review culture, and sprint delivery workflows.',
    ],
  },
  {
    title: 'Software Engineer & Technical Writer',
    company: 'SingularityNET DAO',
    url: 'https://singularitynet.io/',
    startEnd: '2023 – 2025',
    bullets: [
      'Co-architected a Web3 community platform using soulbound tokens (ERC-5192) for on-chain identity, task tracking, and governance for 3,000+ DAO members.',
      'Designed event-driven task pipelines and a participation scoring engine, improving tracking efficiency by 30% across distributed nodes.',
      'Authored 10+ technical publications on AGI, stablecoins, DeFi architecture, and decentralised identity — growing readership to 10,000+ developers.',
    ],
  },
  {
    title: 'Fullstack Engineer & Team Lead',
    company: 'Papayr Limited',
    url: 'https://find-and-update.company-information.service.gov.uk/company/14012451',
    startEnd: '2023 – 2024',
    bullets: [
      'Led backend team delivering a payments and payroll platform.',
      'Established code review standards, sprint ceremonies, and engineering documentation practices.',
    ],
  },
  {
    title: 'Software Engineer & Technical Writer',
    company: 'CodeSee – OSH',
    url: 'https://www.codesee.io/',
    startEnd: '2022 – 2023',
    bullets: [
      'Built Node.js/TypeScript Discord and Twitter automation bots eliminating 50% of manual community management workload.',
      'Developed React SPAs with Hooks and Redux; built custom web scrapers cutting content curation time by 40%.',
      'Authored 10+ technical articles and developer guides accelerating adoption of CodeSee\'s open-source tooling.',
    ],
  },
  {
    title: 'Backend Engineer',
    company: 'Yebox Technologies',
    url: 'https://yebox.io/',
    startEnd: '2023',
    bullets: [
      'Delivered production REST APIs in NestJS/TypeScript; integrated Stripe, Twilio, and SmileID with idempotency and retry logic.',
      'Led decomposition of a monolith into domain-bounded microservices; implemented Redis caching and NGINX load balancing — 3x throughput increase.',
      'Optimised PostgreSQL with indexed CTEs and query plan analysis — improving average API response times by 45%.',
    ],
  },
  {
    title: 'Backend Engineer & Team Lead',
    company: 'FirstFounders Inc.',
    url: 'https://firstfounders.cc/',
    startEnd: '2022 – 2023',
    bullets: [
      'Led a backend team of 5 engineers; built data ingestion APIs processing CSV, JSON, and Excel at scale with AWS S3 storage.',
      'Implemented Dockerised CI/CD on AWS ECR + ECS — compressed release cycles from bi-weekly to daily, hotfixes in under 30 minutes.',
      'Tuned MongoDB and PostgreSQL with compound indexes and query batching — 50% reduction in average query execution time.',
    ],
  },
  {
    title: 'Fullstack Engineer',
    company: 'TheMiddleMaan Enterprise',
    url: 'http://tmm.surge.sh/',
    startEnd: '2021 – 2022',
    bullets: [
      'Delivered full-stack backends in NestJS, GoFiber, and PostgreSQL; collaborated with designers on pixel-accurate React UIs.',
      'Architected Redis caching and NGINX load balancing — scaling to 2,000+ concurrent users with sub-200ms response times.',
    ],
  },
]

const ExperienceEntry = ({ title, company, url, startEnd, bullets }) => (
  <div className='relative pl-10 pb-14 last:pb-0 border-l-2 border-dark/20 dark:border-light/20 last:border-transparent'>
    <div className='absolute -left-[9px] top-0.5 w-4 h-4 rounded-full bg-primary dark:bg-primaryDark
    border-2 border-light dark:border-dark' />

    <div className='flex flex-wrap items-start justify-between gap-x-4 gap-y-1 mb-4'>
      <div>
        <h4 className='text-xl font-bold text-dark dark:text-light md:text-lg'>{title}</h4>
        <a href={url} target='_blank' rel='noreferrer'
          className='text-primary dark:text-primaryDark font-semibold text-lg hover:underline
          underline-offset-2 md:text-base'>
          {company}
        </a>
      </div>
      <span className='text-xs font-semibold text-dark/50 dark:text-light/50 uppercase tracking-[3px] pt-1.5'>
        {startEnd}
      </span>
    </div>

    <ul className='space-y-2.5'>
      {bullets.map((bullet, i) => (
        <li key={i} className='flex gap-3 text-sm text-dark/75 dark:text-light/75 font-medium leading-relaxed'>
          <span className='text-primary dark:text-primaryDark flex-shrink-0 mt-0.5 font-bold'>–</span>
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  </div>
)

const Experience = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className='flex flex-col items-center'
      id='experience'
    >
      <h3 className='uppercase tracking-[10px] text-primary dark:text-primaryDark text-2xl mb-16
      md:tracking-[5px] md:text-xl text-center'>
        Experience
      </h3>
      <div className='w-full max-w-4xl'>
        {experiences.map((exp) => (
          <ExperienceEntry key={exp.company} {...exp} />
        ))}
      </div>
    </motion.div>
  )
}

export default Experience
